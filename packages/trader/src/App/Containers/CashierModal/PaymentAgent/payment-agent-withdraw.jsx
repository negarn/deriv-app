import classNames           from 'classnames';
import PropTypes            from 'prop-types';
import React                from 'react';
import {
    Button,
    Dropdown,
    Input,
}                           from 'deriv-components';
import {
    Field,
    Formik,
    Form,
}                           from 'formik';
import { getDecimalPlaces } from '_common/base/currency_base';
import Localize             from 'App/Components/Elements/localize.jsx';
import { localize }         from 'App/i18n';
import Icon                 from 'Assets/icon.jsx';
import { connect }          from 'Stores/connect';
import {
    validNumber,
    getPreBuildDVRs,
}                           from 'Utils/Validator/declarative-validation-rules';
import PaymentAgentReceipt  from './payment-agent-receipt.jsx';
import Error                from '../error.jsx';
import Loading              from '../../../../templates/_common/components/loading.jsx';

const validateWithdrawal = (values, { balance, currency, payment_agent }) => {
    const errors = {};

    // TODO: uncomment this when adding the input field in the form
    // if (values.payment_method === 'payment_agent' && (!values.payment_agent || !/^[A-Za-z]+[0-9]+$/.test(values.payment_agent))) {
    //     errors.payment_method = true;
    // }

    if (!values.amount) {
        errors.amount = true;
    } else if (!validNumber(
        values.amount,
        {
            type    : 'float',
            decimals: getDecimalPlaces(currency),
            min     : payment_agent.min_withdrawal,
            max     : payment_agent.max_withdrawal,
        },
    )) {
        errors.amount = getPreBuildDVRs().number.message;
    }
    // } else if (+balance < +values.amount) {
    //     errors.amount = localize('Insufficient balance.');
    // }

    return errors;
};

const RadioDropDown = ({
    field: { name, value, onChange },
    id,
    label,
    className,
    ...props
}) => (
    <React.Fragment>
        <input
            id={id}
            name={name}
            value='list'
            checked={value === 'list'}
            onChange={onChange}
            type='radio'
        />
        <label htmlFor={id}>
            <Localize i18n_default_text='By name' />
            <Field>
                {
                    ({ field, form }) => (
                        <Dropdown
                            id='payment_agents'
                            className='payment-agent__drop-down'
                            classNameDisplay='payment-agent__drop-down-display'
                            classNameDisplaySpan='payment-agent__drop-down-display-span'
                            classNameItems='payment-agent__drop-down-items'
                            list={props.payment_agent_list}
                            name='payment_agents'
                            value={props.selected_payment_agent.value}
                            onChange={(e) => {
                                props.onChangePaymentAgent(e);
                                form.setFieldValue('payment_method', 'list');
                            }}
                        />
                    )
                }
            </Field>
        </label>

    </React.Fragment>
);

const RadioInput = ({ touched, errors, field: { value, onChange }, id }) => (
    <React.Fragment>
        <input
            id={id}
            type='radio'
            name='payment_method'
            value='name'
            checked={value === 'name'}
            onChange={onChange}
        />
        <label htmlFor={id}>
            <Localize i18n_default_text='By payment agent ID' />
            <Field name='payment_agent'>
                {/* eslint-disable-next-line no-shadow */}
                {(params) => (
                    <Input
                        {...params.field}
                        className='payment-agent__input'
                        type='text'
                        placeholder='CR'
                        error_message={
                            // eslint-disable-next-line max-len
                            touched.payment_agent && errors.payment_agent
                        }
                        autoComplete='off'
                        maxLength='20'
                        onFocus={() => {
                            params.form.setFieldValue('payment_method', 'name');
                        }}
                    />
                )}
            </Field>
        </label>
    </React.Fragment>
);

class PaymentAgentWithdraw extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    validateWithdrawalPassthrough = (values) => (
        validateWithdrawal(values, {
            balance      : this.props.balance,
            currency     : this.props.currency,
            payment_agent: this.props.selected_payment_agent,
        })
    );

    onWithdrawalPassthrough = (values) => {
        this.props.requestPaymentAgentWithdraw({
            loginid          : this.props.selected_payment_agent.value,
            currency         : this.props.currency,
            amount           : values.amount,
            verification_code: this.props.verification_code,
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.props.is_loading ?
                    <Loading className='payment-agent__loader' />
                    :
                    <React.Fragment>
                        {/* for errors with CTA hide the form and show the error,
                         for others show them at the bottom of the form next to submit button */}
                        {this.props.error.button_text ?
                            <Error error={this.props.error} />
                            :
                            <div className='payment-agent__wrapper'>
                                {this.props.is_withdraw_successful ?
                                    <PaymentAgentReceipt />
                                    :
                                    <React.Fragment>
                                        <h2 className='payment-agent__header'>
                                            <Localize i18n_default_text='Payment agent withdrawal' />
                                        </h2>
                                        <Formik
                                            initialValues={{
                                                amount        : '',
                                                payment_agent : '',
                                                payment_agents: this.props.selected_payment_agent.value,
                                                payment_method: this.props.is_name_selected ? 'name' : 'list',
                                            }}
                                            validate={this.validateWithdrawalPassthrough}
                                            onSubmit={this.onWithdrawalPassthrough}
                                        >
                                            {
                                                ({ errors, isSubmitting, isValid, touched, values }) => (
                                                    <Form>
                                                        <div className='payment-agent__radio-group'>
                                                            <Field
                                                                id='payment_agents'
                                                                component={RadioDropDown}
                                                                payment_agent_list={this.props.payment_agent_list}
                                                                // eslint-disable-next-line max-len
                                                                selected_payment_agent={this.props.selected_payment_agent}
                                                                onChangePaymentAgent={this.props.onChangePaymentAgent}
                                                                className='payment-agent__radio'
                                                                name='payment_method'
                                                            />
                                                            <Field
                                                                id='payment_agent'
                                                                component={RadioInput}
                                                                touched={touched}
                                                                errors={errors}
                                                                className='payment-agent__radio'
                                                                name='payment_method'
                                                            />
                                                        </div>
                                                        <Field name='amount'>
                                                            {({ field }) => (
                                                                <Input
                                                                    {...field}
                                                                    className='payment-agent__input-long dc-input--no-placeholder'
                                                                    type='number'
                                                                    label={localize('Amount')}
                                                                    error_message={touched.amount && errors.amount}
                                                                    required
                                                                    leading_icon={<span className={classNames(
                                                                        'symbols',
                                                                        `symbols--${this.props.currency.toLowerCase()}`,
                                                                    )}
                                                                    />}
                                                                    autoComplete='off'
                                                                    maxLength='30'
                                                                />
                                                            )}
                                                        </Field>
                                                        <div className='payment-agent__submit'>
                                                            {this.props.error.message &&
                                                            <React.Fragment>
                                                                <Icon
                                                                    icon='IconEmergency'
                                                                    className='payment-agent__error-icon'
                                                                />
                                                                <Icon
                                                                    icon='IconError'
                                                                    className='payment-agent__error-small-icon'
                                                                />
                                                                <p className='payment-agent__error'>
                                                                    {this.props.error.message}
                                                                </p>
                                                            </React.Fragment>
                                                            }
                                                            <Button
                                                                className={
                                                                    classNames(
                                                                        'payment-agent__withdraw-button',
                                                                        'btn--primary',
                                                                        'btn--primary--orange',
                                                                        {
                                                                            'payment-agent__withdraw-button--disabled': !values.payment_method ||
                                                                                !isValid || isSubmitting,
                                                                        },
                                                                    )
                                                                }
                                                                type='submit'
                                                                is_disabled={
                                                                    !values.payment_method || !isValid || isSubmitting
                                                                }
                                                            >
                                                                <Localize i18n_default_text='Withdraw' />
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                )
                                            }
                                        </Formik>
                                    </React.Fragment>
                                }
                            </div>
                        }
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

PaymentAgentWithdraw.propTypes = {
    balance                    : PropTypes.string,
    currency                   : PropTypes.string,
    error_message_withdraw     : PropTypes.string,
    is_loading                 : PropTypes.bool,
    is_name_selected           : PropTypes.bool,
    is_withdraw_successful     : PropTypes.bool,
    onChangePaymentAgent       : PropTypes.func,
    onMount                    : PropTypes.func,
    payment_agent_list         : PropTypes.array,
    requestPaymentAgentWithdraw: PropTypes.func,
    selected_payment_agent     : PropTypes.object,
    setIsNameSelected          : PropTypes.func,
    verification_code          : PropTypes.string,
};

export default connect(
    ({ client, modules }) => ({
        balance                    : client.balance,
        currency                   : client.currency,
        error                      : modules.cashier.config.payment_agent.error,
        is_name_selected           : modules.cashier.config.payment_agent.is_name_selected,
        is_loading                 : modules.cashier.is_loading,
        is_withdraw_successful     : modules.cashier.config.payment_agent.is_withdraw_successful,
        onChangePaymentAgent       : modules.cashier.onChangePaymentAgent,
        onChangePaymentAgentID     : modules.cashier.onChangePaymentAgentID,
        onMount                    : modules.cashier.onMountPaymentAgentWithdraw,
        payment_agent_list         : modules.cashier.config.payment_agent.agents,
        requestPaymentAgentWithdraw: modules.cashier.requestPaymentAgentWithdraw,
        selected_payment_agent     : modules.cashier.config.payment_agent.selected_agent,
        setIsNameSelected          : modules.cashier.setIsNameSelected,
    }),
)(PaymentAgentWithdraw);

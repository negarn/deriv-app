import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes                      from 'prop-types';
import React                          from 'react';
import { Scrollbars }                 from 'tt-react-custom-scrollbars';
import {
    Accordion,
    Button }                          from 'deriv-components';
import Localize                       from 'App/Components/Elements/localize.jsx';
import Dropdown                       from 'App/Components/Form/DropDown';
import { localize }                   from 'App/i18n';
import { connect }                    from 'Stores/connect';
import { website_name }               from 'App/Constants/app-config';
import Icon                           from 'Assets/icon.jsx';
import EmailSent                      from '../email-sent.jsx';
import Loading                        from '../../../../templates/_common/components/loading.jsx';

class PaymentAgentList extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <div className='cashier__wrapper'>
                {this.props.is_email_sent ?
                    <EmailSent
                        is_email_sent={this.props.is_email_sent}
                        is_resend_clicked={this.props.is_resend_clicked}
                    />
                    :
                    <div className='payment-agent__wrapper'>
                        <Scrollbars
                            style={{ width: '100%', height: '100%' }}
                            autoHide
                        >
                            <p><Localize i18n_default_text='A payment agent is authorised to process deposits and withdrawals for you if your local payment methods or currencies are not supported on {{website_name}}.' values={{ website_name }} /></p>
                            <div className='payment-agent__instructions'>
                                <div className='payment-agent__instructions-section'>
                                    <h2 className='payment-agent__header'><Localize i18n_default_text='Deposit' /></h2>
                                    <p><Localize i18n_default_text='Choose a payment agent and contact them for instructions.' /></p>
                                </div>
                                <div className='payment-agent__instructions-section'>
                                    <h2 className='payment-agent__header'><Localize i18n_default_text='Withdrawal' /></h2>
                                    <Button
                                        className='btn--primary btn--primary--orange payment-agent__button'
                                        has_effect
                                        text={localize('Request withdrawal form')}
                                        onClick={this.props.sendVerificationEmail}
                                    />
                                </div>
                            </div>
                            <h2 className='payment-agent__header payment-agent__available-header'><Localize i18n_default_text='Available Payment Agents' /></h2>
                            {this.props.is_loading ?
                                <Loading className='payment-agent__loader' />
                                :
                                <React.Fragment>
                                    <div className='payment-agent__available-selector'>
                                        <Localize i18n_default_text='Deposit/withdrawal method' />
                                        <Dropdown
                                            id='payment_methods'
                                            className='payment-agent__drop-down'
                                            list={this.props.supported_banks}
                                            name='payment_methods'
                                            value=''
                                            onChange={this.props.onChangePaymentMethod}
                                        />
                                    </div>
                                    <Accordion
                                        className='payment-agent__accordion'
                                        list={this.props.payment_agent_list.map((payment_agent) => ({
                                            header : payment_agent.name,
                                            content: (
                                                <div className='payment-agent__accordion-content'>
                                                    <div className='payment-agent__accordion-content-line'><Icon icon='IconPhone' className='payment-agent__accordion-content-icon' />{payment_agent.phone}</div>
                                                    <div className='payment-agent__accordion-content-line'><Icon icon='IconWebsite' className='payment-agent__accordion-content-icon' />{payment_agent.url}</div>
                                                    <div><Icon icon='IconEmail' className='payment-agent__accordion-content-icon' />{payment_agent.email}</div>
                                                </div>
                                            ),
                                        }))}
                                    />
                                </React.Fragment>
                            }
                            <div className='payment-agent__disclaimer'>
                                <span className='payment-agent__disclaimer--bold'><Localize i18n_default_text='DISCLAIMER' /></span>:&nbsp;
                                <Localize i18n_default_text='{{website_name}} is not affiliated with any Payment Agent. Customers deal with Payment Agents at their sole risk. Customers are advised to check the credentials of Payment Agents, and check the accuracy of any information about Payments Agents (on Deriv or elsewhere) before transferring funds.' values={{ website_name }} />
                            </div>
                        </Scrollbars>
                    </div>
                }
            </div>
        );
    }
}

PaymentAgentList.propTypes = {
    is_email_sent        : PropTypes.bool,
    is_loading           : PropTypes.bool,
    is_resend_clicked    : PropTypes.bool,
    onChangePaymentMethod: PropTypes.func,
    onMount              : PropTypes.func,
    payment_agent_list   : PropTypes.array,
    resend_timeout       : PropTypes.number,
    sendVerificationEmail: PropTypes.func,
    supported_banks      : MobxPropTypes.arrayOrObservableArray,
};

export default connect(
    ({ modules }) => ({
        is_email_sent        : modules.cashier.config.payment_agent.verification.is_email_sent,
        is_resend_clicked    : modules.cashier.config.payment_agent.verification.is_resend_clicked,
        is_loading           : modules.cashier.is_loading,
        onChangePaymentMethod: modules.cashier.onChangePaymentMethod,
        onMount              : modules.cashier.onMountPaymentAgent,
        payment_agent_list   : modules.cashier.config.payment_agent.filtered_list,
        resend_timeout       : modules.cashier.config.withdraw.verification.resend_timeout,
        sendVerificationEmail: modules.cashier.sendVerificationEmail,
        supported_banks      : modules.cashier.config.payment_agent.supported_banks,
    })
)(PaymentAgentList);
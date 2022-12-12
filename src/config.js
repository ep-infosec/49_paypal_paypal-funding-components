/* @flow */

import { FUNDING } from '@paypal/sdk-constants/src';

export const REMEMBER_FUNDING_URI = '/smart/funding/remember';

export const SUPPORTED_FUNDING_SOURCES : $ReadOnlyArray<$Values<typeof FUNDING>> = [
    FUNDING.PAYPAL,
    FUNDING.VENMO,
    FUNDING.ITAU,
    FUNDING.CREDIT,
    FUNDING.PAYLATER,
    FUNDING.APPLEPAY,
    FUNDING.IDEAL,
    FUNDING.SEPA,
    FUNDING.BANCONTACT,
    FUNDING.GIROPAY,
    FUNDING.EPS,
    FUNDING.SOFORT,
    FUNDING.MYBANK,
    FUNDING.BLIK,
    FUNDING.P24,
    FUNDING.ZIMPLER,
    FUNDING.WECHATPAY,
    FUNDING.PAYU,
    FUNDING.VERKKOPANKKI,
    FUNDING.TRUSTLY,
    FUNDING.OXXO,
    FUNDING.BOLETO,
    FUNDING.BOLETOBANCARIO,
    FUNDING.MAXIMA,
    FUNDING.MERCADOPAGO,
    FUNDING.MULTIBANCO,
    FUNDING.SATISPAY,
    FUNDING.CARD
];

export const REMEMBERABLE_FUNDING_SOURCES = [
    FUNDING.PAYPAL,
    FUNDING.ITAU
];
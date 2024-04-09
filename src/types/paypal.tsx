export interface IPayPalAmountCurrency {
    currency_code: string;
    value: string;
}

export interface IPayPalPurchaseUnitAmoutBreakdown {
    handling: IPayPalAmountCurrency
    insurance: IPayPalAmountCurrency
    item_total: IPayPalAmountCurrency
    shipping: IPayPalAmountCurrency
    shipping_discount: IPayPalAmountCurrency
}

export interface IPayPalPurchaseUnitAmout {
    currency_code: string;
    value: string;
    breakdown: IPayPalPurchaseUnitAmoutBreakdown
}
export interface IPayPalPurchaseUnitItem{
    name: string;
    unit_amount: IPayPalAmountCurrency;
    tax: IPayPalAmountCurrency;
    quantity: string;
    description: string;
}

export interface IPayPalPurchaseUnitPayee{
    email_address: string;
    merchant_id: string
}

export interface IPayPalApproveOrderValuePaymentsCaptures {
    amount: IPayPalAmountCurrency;
    create_time: string;
    final_capture: boolean;
    id: string;
    seller_protection: {
        dispute_categories: string[],
        status: string
    }
    status: string;
    update_time: string
}

export interface IPayPalShippingAdress{
    address_line_1 : string
    admin_area_1: string
    admin_area_2: string
    country_code: string
    postal_code: string
}

export interface IPayPalShipping{
    name: {
        full_name: string
    },
    address: IPayPalShippingAdress
}

export interface IPayPalApproveOrderValuePurchaseUnits {
    amount: IPayPalPurchaseUnitAmout
    description:  string;
    items:  IPayPalPurchaseUnitItem[]
    payee: IPayPalPurchaseUnitPayee;
    payments: {
        captures: IPayPalApproveOrderValuePaymentsCaptures
    }
    reference_id: string;
    shipping: IPayPalShipping
}

export interface IPayPalApproveOrderValuePayer{
    name: {
        given_name: string,
        surname: string
    };
    email_address: string;
    payer_id: string;
    address: {
        country_code: string
    }
}

export interface IPayPalApproveOrderShipping{
    address: {
        address_line_1: string,
        admin_area_1: string,
        admin_area_2: string,
        country_code: string,
        postal_code: string,
    },
    name: {
        full_name: string
    }
}

export interface IPayPalApproveOrderValue {

    create_time: string;
    id: string
    intent: string
    links: any
    payer: IPayPalApproveOrderValuePayer;
    purchase_units: IPayPalApproveOrderValuePurchaseUnits[];
    status: string;
    update_time: string;
    shipping: IPayPalApproveOrderShipping
}

/*export interface IPayPalApproveOrderCaptured {
    dispatching: boolean;
    error: any
    errorHandled: boolean;
    handlers: []
    rejected: boolean;
    resolved: boolean;
    stack: any;
    value: IPayPalApproveOrderValue;
}*/

export interface IPayment {
    
    platform: string,
    total_amount: {
        amount: string,
        currency_code: string  
    },
    buy_id: string,
    order:{
        order_id: string,
        items: IPayPalPurchaseUnitItem[],
        status: string
    },
    client: {
        name: string,
        surname: string,
        email: string,
        address: {
            country_code: string,
            address_line_1: string,
            admin_area_1: string,
            admin_area_2: string,
            postal_code: string,
        }
    }
}
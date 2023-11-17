import { ProtocolParamsMilestoneOption } from './protocol-params-milestone-option';
import { ReceiptMilestoneOption } from './receipt-milestone-option';
export * from './protocol-params-milestone-option';
export * from './receipt-milestone-option';
export * from './milestone-options';
export declare const MilestoneOptionDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof ReceiptMilestoneOption;
        name: any;
    } | {
        value: typeof ProtocolParamsMilestoneOption;
        name: any;
    })[];
};

import { MilestonePayload } from './milestone';
import { Payload } from './payload';
import { TaggedDataPayload } from './tagged';
import { TransactionPayload } from './transaction';
import { TreasuryTransactionPayload } from './treasury';
export * from './milestone';
export * from './tagged';
export * from './transaction';
export * from './payload';
export declare const PayloadDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof MilestonePayload;
        name: any;
    } | {
        value: typeof TaggedDataPayload;
        name: any;
    } | {
        value: typeof TransactionPayload;
        name: any;
    } | {
        value: typeof TreasuryTransactionPayload;
        name: any;
    })[];
};
export declare function parsePayload(data: any): Payload;

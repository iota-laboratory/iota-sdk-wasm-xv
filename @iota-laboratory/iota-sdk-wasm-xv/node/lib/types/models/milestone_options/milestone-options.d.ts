/**
 * All of the milestone option types.
 */
declare enum MilestoneOptionType {
    /** The Receipt milestone option. */
    Receipt = 0,
    /** The ProtocolParams milestone option. */
    ProtocolParams = 1
}
declare abstract class MilestoneOption {
    readonly type: MilestoneOptionType;
    /**
     * @param type The type of milestone option.
     */
    constructor(type: MilestoneOptionType);
    /**
     * Get the type of milestone option.
     */
    getType(): MilestoneOptionType;
}
export { MilestoneOptionType, MilestoneOption };

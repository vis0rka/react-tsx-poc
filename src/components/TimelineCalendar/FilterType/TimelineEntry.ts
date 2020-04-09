import { TimelineViewModel, TypeEnum } from "mock/timelineApi"

export default class TimelineEntry {
    type: string;
    subType: string;
    date: Date;
    comment: string;

    clientId?: string;
    contractId?: string;
    contractNumber?: string;

    constructor(timelineEntry: TimelineViewModel) {
        this.date = new Date(timelineEntry.date);
        this.comment = timelineEntry.comment;
        this.type = Object.keys(TypeEnum)[timelineEntry.type];
        this.subType = timelineEntry.subType;

        this.clientId = timelineEntry.clientId;
        this.contractId = timelineEntry.contractId;
        this.contractNumber = timelineEntry.contractNumber;
    }
}

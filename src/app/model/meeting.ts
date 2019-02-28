export class Meeting {
  public meetingName: string;
  public organizerName: string;
  public agenda: string;
  public meetingAttendeeID: Array<number>;
  public startTime: string;
  public endTime: string;
  public roomId: number;

  constructor(
    meetingName: string,
    organizerName: string,
    agenda: string,
    meetingAttendeeID: Array<number>,
    startTime: string,
    endTime: string,
    roomId: number
  ) {
    this.meetingName = meetingName;
    this.organizerName = organizerName;
    this.agenda = agenda;
    this.meetingAttendeeID = meetingAttendeeID;
    this.startTime = startTime;
    this.endTime = endTime;
    this.roomId = roomId
  }
}

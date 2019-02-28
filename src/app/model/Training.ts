export class Training {
  public topic: string;
  public description: string;
  public startTime: string;
  public endTime: string;
  public roomId: number;

  constructor(
    topic: string,
    description: string,
    startTime: string,
    endTime: string,
    roomId: number
  ) {
    this.topic = topic;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.roomId = roomId;
  }
}

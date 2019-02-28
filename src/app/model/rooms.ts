export class Rooms {
  public RoomId: number;
  public RoomName: string;

  constructor(name: string, id: number) {
    this.RoomId = id;
    this.RoomName = name;
  }
}

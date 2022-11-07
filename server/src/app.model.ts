export class SNFTViewModel {
  uuid: string;
  address: string;
  viewName: string;

  constructor(uuid: string, address: string, viewName: string) {
    this.uuid = uuid;
    this.address = address;
    this.viewName = viewName;
  }
}

export class CNFTDto {
  snftAddresses: Array<string>;

  constructor(snftAddresses: Array<string>) {
    this.snftAddresses = snftAddresses;
  }
}

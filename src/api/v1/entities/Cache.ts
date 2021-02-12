import { ICreateCacheRequestDTO } from '../useCases/CreateCache/CreateCacheDTO'

export class Cache {
  public readonly key: string;
  public value: string;
  public pattern: string;

  constructor (key: string, value?: string) {
    this.key = key
    this.value = value
  }

  public static create (data: ICreateCacheRequestDTO): Cache {
    return new Cache(data.prefix + '-' + data.key, data.value)
  }
}

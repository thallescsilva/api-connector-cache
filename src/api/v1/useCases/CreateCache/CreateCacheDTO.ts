export interface ICreateCacheRequestDTO {
  method?: string;
  prefix: string;
  key: string;
  value?: string;
  pattern?: string;
}

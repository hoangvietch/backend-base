import { IsString, IsOptional } from 'class-validator';

export class CreateStoreDto {
  
  @IsString()
  public name: string;
  @IsString()
  public accessToken: string;
  @IsString()
  public scope: string
  
}
export class UpdateStoreDto {
  
  @IsOptional()
  public name: string;
  @IsOptional()
  public id: string;
  @IsString()
  public status: string
  
}


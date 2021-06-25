import { IsEmail, IsString,  IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;
  @IsString()
  public first_name: string;
  @IsString()
  public last_name: string;
  @IsOptional()
  public plan: string;
  @IsOptional()
  public payment_reference_id: string;
  @IsString()
  public country: string;
  @IsString()
  public address_city: string;
  @IsString()
  public address_country: string;
  @IsString()
  public address_line1: string;
  @IsOptional()
  public address_line2: string;
  @IsString()
  public address_state: string;
  @IsString()
  public address_zip: string;
 
}

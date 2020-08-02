import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    public readonly API_ENDPOINT: string = 'https://luckydraws.herokuapp.com/';
    public readonly API_MOCK_ENDPOINT: string = 'https://luckydraws.herokuapp.com/';
}
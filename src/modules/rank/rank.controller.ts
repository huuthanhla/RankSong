import { Controller, HttpStatus, Get, Response, Param } from '@nestjs/common';

import { RankService } from './rank.service';

@Controller('ranks')
export class RankController {

    constructor(private rankService: RankService) {}

    @Get('/:country')
    async getRanks(@Response() response, @Param('country') country) {
        const countryName = this.rankService.getCountryName(country);
        const { songs } = await this.rankService.getRanks(country);
        console.log('Im getRanks --------------------')
        return response.status(HttpStatus.OK).json({data: {
            country: countryName,
            songs
        }});
    }

    @Get('/songs/:country')
    async getSongs(@Response() response, @Param('country') country) {
        console.log('Im getSongs --------------------')

        const countryName = this.rankService.getCountryName(country);
        const tracks = await this.rankService.getSongs(country);
        
        return response.status(HttpStatus.OK).json({data: {
            country: countryName,
            tracks: tracks
        }});
    }

}
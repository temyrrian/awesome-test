import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sort } from '@angular/material';

import { AVAILABLE_COLUMNS } from '../constants';

@Injectable()
export class UrlSortService {
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    getSortingOrder(): Sort {
        const direction = this.activatedRoute.snapshot.queryParams.direction;
        const active = this.activatedRoute.snapshot.queryParams.active;

        if (
            (direction === 'asc' || direction === 'desc') &&
            AVAILABLE_COLUMNS.includes(active)
        ) {
            return {
                direction: direction,
                active: active,
            };
        }

        return null;
    }

    setSortingOrder(sortData: Sort) {
        if (sortData.active && sortData.direction) {
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: sortData,
                queryParamsHandling: 'merge'
            });
        } else {
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {}
            });
        }
    }
}

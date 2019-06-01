import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
    Sort,
} from '@angular/material';

import { User } from '../../../core/models';
import { AVAILABLE_COLUMNS } from '../../../core/constants';
import { UrlSortService } from '../../../core/services';

@Component({
    selector: 'app-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    public data: MatTableDataSource<User>;

    displayedColumns: string[] = AVAILABLE_COLUMNS;
    constructor(
        private activatedRoute: ActivatedRoute,
        private urlSortingService: UrlSortService
    ) {}

    ngOnInit() {
        this.data = new MatTableDataSource(
            this.activatedRoute.snapshot.data.users
        );
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;

        const sortingOrderFromUrl = this.urlSortingService.getSortingOrder();
        if (sortingOrderFromUrl) {
            this.data.sort.direction = sortingOrderFromUrl.direction;
            this.data.sort.active = sortingOrderFromUrl.active;
        }
    }

    public onSortingChange(sortingData: Sort) {
        const sortingState = {
            active: sortingData.active,
            direction: sortingData.direction,
        };
        this.urlSortingService.setSortingOrder(sortingState);
    }
}

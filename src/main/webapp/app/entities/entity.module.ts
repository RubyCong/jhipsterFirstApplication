import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterFirstApplicationRegionModule } from './region/region.module';
import { JhipsterFirstApplicationCountryModule } from './country/country.module';
import { JhipsterFirstApplicationLocationModule } from './location/location.module';
import { JhipsterFirstApplicationDepartmentModule } from './department/department.module';
import { JhipsterFirstApplicationTaskModule } from './task/task.module';
import { JhipsterFirstApplicationEmployeeModule } from './employee/employee.module';
import { JhipsterFirstApplicationJobModule } from './job/job.module';
import { JhipsterFirstApplicationJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterFirstApplicationRegionModule,
        JhipsterFirstApplicationCountryModule,
        JhipsterFirstApplicationLocationModule,
        JhipsterFirstApplicationDepartmentModule,
        JhipsterFirstApplicationTaskModule,
        JhipsterFirstApplicationEmployeeModule,
        JhipsterFirstApplicationJobModule,
        JhipsterFirstApplicationJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterFirstApplicationEntityModule {}

/***************************************************************************

Copyright (c) 2016, EPAM SYSTEMS INC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

****************************************************************************/

import { Component, OnInit, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { DICTIONARY } from './../../../dictionary/global.dictionary';

@Component({
  selector: 'dlab-ssn-monitor',
  templateUrl: './ssn-monitor.component.html',
  styleUrls: ['./ssn-monitor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SsnMonitorComponent implements OnInit {
  readonly DICTIONARY = DICTIONARY;

  public errorMessage: string = '';
  public monitorData = {};

  @ViewChild('bindDialog') bindDialog;
  @Output() manageEnv: EventEmitter<{}> = new EventEmitter();

  ngOnInit() {}

  public open(param, data): void {
    this.monitorData = data || {};
    this.bindDialog.open(param);
  }
  public close(param, data): void {
    this.bindDialog.close();
  }

  public isEmpty(obj) {
    if (obj) return Object.keys(obj).length === 0;
  }

  public convertSize(bytes) {
    if (Number(bytes) === 0) return '0 Byte';

    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(3)) + ' ' + sizes[i];
  }
}

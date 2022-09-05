/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageActionDialogComponent } from './image-action-dialog.component';
import { MaterialModule } from '../../../shared/material.module';
import { TerminateDialogComponent } from './terminate-dialog/terminate-dialog.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { FormsModule } from '@angular/forms';
import { ShareUserDataComponent } from './share-user-data/share-user-data.component';



@NgModule({
  declarations: [ ImageActionDialogComponent, TerminateDialogComponent, ShareDialogComponent, ShareUserDataComponent ],
  imports: [ CommonModule, MaterialModule, FormsModule ],
  entryComponents: [TerminateDialogComponent , ShareDialogComponent],
  exports: [ ImageActionDialogComponent ]
})
export class ImageActionDialogModule { }

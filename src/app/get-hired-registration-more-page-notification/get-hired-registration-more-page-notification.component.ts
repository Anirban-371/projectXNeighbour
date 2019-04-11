import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-get-hired-registration-more-page-notification',
    templateUrl: './get-hired-registration-more-page-notification.component.html',
    styleUrls: ['./get-hired-registration-more-page-notification.component.css']
})
export class GetHiredRegistrationMorePageNotificationComponent implements OnInit {

    myForm: FormGroup;
    disabled = false;
    ShowFilter = false;
    limitSelection = false;
    cities: any[] = [];
    selectedItems: any[] = [];
    dropdownSettings: any = {};
    @Output() public notificationRegisterComplete = new EventEmitter();
    constructor(private _formBuilder: FormBuilder) { }

    notificationFormGroup = this._formBuilder.group({
        'notificationStatus': ['', [Validators.required]],
        'starttime': ['', [Validators.required]],
        'endtime': ['', [Validators.required]],
        'weekdays': ['', [Validators.required]],
        'saturday': ['', [Validators.required]],
        'sunday': ['', [Validators.required]],
        'all': ['', [Validators.required]],
        'city': ['', [Validators.required]],
        "serviceArea": ['', [Validators.required]]
    });

    ngOnInit() {
        this.cities = [
            { item_id: 1, item_text: 'Arizona' },
            { item_id: 2, item_text: 'Los Angeles' },
            { item_id: 3, item_text: 'San Francisco' },
            { item_id: 4, item_text: 'Chicago' },
            { item_id: 5, item_text: 'Seattle' },
            { item_id: 6, item_text: 'Boston' }
        ];
        this.selectedItems = [{ item_id: 4, item_text: 'Chicago' }];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: this.ShowFilter
        };
        this.myForm = this._formBuilder.group({
            city: [this.selectedItems]
        });
        let result = document.querySelector('.result'),
            img_result = document.querySelector('.img-result'),
            img_w = document.querySelector('.img-w'),
            img_h = document.querySelector('.img-h'),
            options = document.querySelector('.options'),
            save = document.querySelector('.save'),
            cropped = document.querySelector('.cropped'),
            dwn = document.querySelector('.download'),
            upload = document.querySelector('#file-input'),
            cropper = '';
    }

    onItemSelect(item: any) {
        console.log('onItemSelect', item);
    }
    onSelectAll(items: any) {
        console.log('onSelectAll', items);
    }
    toogleShowFilter() {
        this.ShowFilter = !this.ShowFilter;
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
    }
    handleLimitSelection() {
        if (this.limitSelection) {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
        } else {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
        }
    }

    submit() {
        let notificationDetails = { "name": "anirban" };
        //remove this
        this.notificationRegisterComplete.next(notificationDetails);
        if (this.notificationFormGroup.valid) {
            //this.registrationEmmiter.next(skillDetails);
        }
    }

}

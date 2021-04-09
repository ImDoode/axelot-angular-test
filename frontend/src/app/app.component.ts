import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormUpdateService } from './form-update.service';
import { IFormData, IFormStructure, IInput } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'axelot';
  dynamicForm: FormGroup;
  formStructure: IFormStructure;
  formData: IFormData;
  controlsList: IInput[];

  constructor(
    private formUpdateService: FormUpdateService
  ) {
    this.dynamicForm = new FormGroup({});
  }

  // Получение структуры формы
  public getFormStructure() {
    this.formUpdateService.getFormStructure().subscribe(data => {
      this.formStructure = data;
      this.controlsList = this.formStructure.column1.inputs.concat(this.formStructure.column2.inputs);
      this.dynamicForm = new FormGroup({});
      for (let control of this.controlsList) {
        this.dynamicForm.addControl(control.text, new FormControl());
      }
    })    
  }

  // Получение данных формы
  public getFormData() {
    if (!this.formStructure) return;
    this.formUpdateService.getFormData().subscribe(data => {
      this.formData = data;
      for (let dataItem of this.formData.data) {
        const currentControl = this.controlsList.find(item => item.id == dataItem.id);
        if (!currentControl) continue;
        let inputValue: string | number | boolean;
        if (dataItem.value !== null && typeof dataItem.value !== 'undefined') {
          switch(currentControl.inputType) {
            case 'String':
              inputValue = dataItem.value.toString();
              break;
          
            case 'Int':
              inputValue = parseInt(dataItem.value);
              if (isNaN(inputValue as number)) {
                inputValue = null;
              }
              break;
            
            case 'Boolean':
              inputValue = ['false', 'true'].includes(dataItem.value.toLowerCase()) ?
                dataItem.value.toLowerCase() == 'true' : null;
              break;
            default:
              inputValue = dataItem.value;
              break;
          }
          if (inputValue === null) {
            console.error('Входящее значение "${inputValue}" поля ${currentControl.text} не соответствует его типу (${currentControl.inputType}');
          } else {
            this.dynamicForm.get(currentControl.text).setValue(inputValue);
          }
        } else {
          this.dynamicForm.get(currentControl.text).reset();
        }
      }
    })    
  }
}

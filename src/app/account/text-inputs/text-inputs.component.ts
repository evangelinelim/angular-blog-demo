import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-inputs',
  templateUrl: './text-inputs.component.html',
  styleUrls: ['./text-inputs.component.scss']
})
export class TextInputsComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: true }) input: ElementRef<HTMLInputElement> = {} as ElementRef;
  @Input() type = 'text';
  @Input() label: string = '';
  
  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
   }
  
  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control?.validator ? [control.validator] : [];
    const asyncValidators = control?.asyncValidator ? [control.asyncValidator] : [];

    if(control){
      control.setValidators(validators);
      control.setAsyncValidators(asyncValidators);
      control.updateValueAndValidity();
      if(control.errors) console.log('control', control.errors.pattern);
    }    
  }

  onChange(event: Event) { 
    const { target } = event
    if (target) console.log('target', (target as HTMLInputElement).value);
  }
  onTouched() { }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }
    
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
    
    
  }
  
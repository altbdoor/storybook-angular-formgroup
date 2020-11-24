import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ChildFormComponent } from 'src/app/child-form/child-form.component';

export default {
  title: 'Child Form Component',
  component: ChildFormComponent,
} as Meta;

const Template: Story<ChildFormComponent> = (args: ChildFormComponent) => ({
  component: ChildFormComponent,
  moduleMetadata: {
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ]
  }
})

const fb = new FormBuilder();
const formObj = fb.group({ option: '' })

export const SampleBroken = Template.bind({})
SampleBroken.args = {
  parentForm: formObj
}

// export const SampleWorking: Story<ChildFormComponent> = (args: ChildFormComponent) => ({
//   component: ChildFormComponent,
//   moduleMetadata: {
//     imports: [
//       CommonModule,
//       FormsModule,
//       ReactiveFormsModule,
//     ],
//   },
//   props: {
//     parentForm: formObj
//   }
// })

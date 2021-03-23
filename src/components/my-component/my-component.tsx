import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private changeHandler(value) {
    console.log('value is', value);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <mav-input
          inputId="la"
          type="text"
          label="Label for input"
          name="test"
          value="Doe"
          placeholder="Please add your user name"
          is-disabled="false"
          onInputChange={event => this.changeHandler(event)}
        >
          <button class="button" slot="prepend">Click</button>
          <svg class="svg" slot="append-inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="crush-icon">
            <path d="M5.999 4.437a2.88 2.88 0 01.761-1.04 2.136 2.136 0 011.243-.626.967.967 0 01.621 0 3.229 3.229 0 011.52.626 2.854 2.854 0 01.968 1.457 2.461 2.461 0 01.138.694v.763a4.193 4.193 0 01-.414 1.32 12.935 12.935 0 01-.829 1.249 9.588 9.588 0 01-1.175 1.18 21.8 21.8 0 01-2.555 1.873.068.068 0 00-.07.07H6a15.066 15.066 0 01-1.727-1.18l-1.037-.832a11.177 11.177 0 01-.9-.9 9.164 9.164 0 01-.966-1.318 2.784 2.784 0 01-.553-1.248 4.036 4.036 0 01-.068-.9 2.507 2.507 0 01.414-1.388 3.129 3.129 0 011.589-1.388 2.453 2.453 0 01.759-.138 2.583 2.583 0 011.244.346 3.72 3.72 0 011.036 1.04 1.518 1.518 0 01.207.348zm-.9 4.579h1.8v-.138c-.138-.556-.277-1.04-.414-1.6a.461.461 0 01.068-.416.668.668 0 00.209-.694.832.832 0 00-.968-.554h-.07a.928.928 0 00-.552.971c.068.14.138.348.275.416.07.07.139.14.07.278-.138.416-.207.832-.345 1.25 0 .138-.07.346-.07.485zM9.108 2.493H8.97a2.331 2.331 0 00-.691-.07c-.207 0-.346.07-.484.07h-.07a1.514 1.514 0 00-.484-.626 1.44 1.44 0 00-.9-.485 1.454 1.454 0 00-.552 0 1.56 1.56 0 00-1.452 1.04c-.068.07-.068.07-.138.07a2.808 2.808 0 00-.761-.07c-.207 0-.345.07-.552.07a2.653 2.653 0 01.552-1.18 2.969 2.969 0 012-1.25 3.131 3.131 0 013.67 2.431z"/>
          </svg>
        </mav-input>
      </div>
    );
  }
}

import {Component, Prop, h, Element, Event, EventEmitter} from '@stencil/core';
import {HTMLStencilElement} from "@stencil/core/internal";

@Component({
  tag: 'mav-input',
  styleUrl: 'mav-input.css',
  shadow: true,
})
export class MavInput {
  /**
   * The id of input
   */
  @Prop() inputId: string;

  /**
   * The label for input
   */
  @Prop() label: string;

  /**
   * The name for input
   */
  @Prop() name: string;

  /**
   * The name for input
   */
  @Prop() value: string;

  /**
   * The name for input
   */
  @Prop() type: string;

  /**
   * The name for input
   */
  @Prop() placeholder: string;
  /**
   * The name for input
   */
  @Prop() isDisabled: boolean;


  @Element() hostElement: HTMLStencilElement;

  hasAppendInnerSlot: boolean;
  hasAppendOuterSlot: boolean;
  hasPrependOuterSlot: boolean;

  @Event() inputChange: EventEmitter;

  inputChangeHandler(event) {
    console.log(event.value)
    this.inputChange.emit(event.value);
  }

  private getId(): string {
    return !!this.inputId ? this.inputId : `${this.name}-1`;
  }

  componentWillLoad() {
    this.hasAppendInnerSlot = !!this.hostElement.querySelector('[slot="append-inner"]');
    this.hasAppendOuterSlot = !!this.hostElement.querySelector('[slot="append"]');
    this.hasPrependOuterSlot = !!this.hostElement.querySelector('[slot="prepend"]');
  }

  render() {
    return (
      <div class="mav-input">
        <slot name="label">
          {this.label.length ?
            (<label htmlFor={this.getId()}>
              {this.label}
          </label>) :
            ''
          }
        </slot>
        <div class="container">
          {this.hasPrependOuterSlot ?
            (<span class="prepend-outer">
                <slot name="prepend"></slot>
            </span>) : ''
          }
          <div class={"field-control" + (this.isDisabled ? 'is-disabled': '')}>
            <input
              id={this.getId()} value={this.value}
              name={this.name}
              type={this.type}
              placeholder={this.placeholder}
              disabled={this.isDisabled}
              onChange={event => this.inputChangeHandler(event.target)}
            />
              {this.hasAppendInnerSlot ?
                (<span class="append-inner">
                      <slot name="append-inner"></slot>
                </span>) : ''
              }
          </div>
          {this.hasAppendOuterSlot ?
            (<span class="append-outer">
                  <slot name="append"></slot>
            </span>) : ''
          }
        </div>
      </div>
    );
  }
}

import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField, // Textbox
  PropertyPaneCheckbox,// Checkbox
  PropertyPaneLabel,// Label
  PropertyPaneLink,//Link
  PropertyPaneSlider,//Slider
  PropertyPaneToggle,//Toggle
  PropertyPaneDropdown //Dropdown
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MultipagewebpartWebPart.module.scss';
import * as strings from 'MultipagewebpartWebPartStrings';

export interface IMultipagewebpartWebPartProps {  
  name: string;
  desc: string;
  Slider:string;
  Toggle:string;
  dropdown:string;
  checkbox:string;
  URL:string;
  textbox:string;
}

export default class MultipagewebpartWebPart extends BaseClientSideWebPart<IMultipagewebpartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.multipagewebpart }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.name)}</p>
              <p class="${ styles.description }">${escape(this.properties.desc)}</p>
              <p class="${ styles.description }">${escape(this.properties.Slider)}</p>
              <p class="${ styles.description }">${escape(this.properties.Toggle)}</p>
              <p class="${ styles.description }">${escape(this.properties.dropdown)}</p>
              <p class="${ styles.description }">${escape(this.properties.checkbox)}</p>
              <p class="${ styles.description }">${escape(this.properties.URL)}</p>
              

              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "COMPANY DETAILS - PAGE 1"
          },
          groups: [
            {
              groupName: "PERSONAL DETAILS",
              groupFields: [
                PropertyPaneTextField('name', {
                  label: "Name",
                  placeholder: "Please enter the name",
                  multiline: false
                  
                }),
                PropertyPaneTextField('desc', {
                  label: "Description:",
                  placeholder: "Please enter the description",
                  multiline: true
                })
              ]
            }
          ]
        },
        {
          header: {
            description: "COMPANY DETAILS - PAGE 2"
          },
          groups: [
            {
              groupName: "OFFICIAL DETAILS",
              groupFields: [
                PropertyPaneSlider('Slider', {
                  label:'Slider',
                  min:1,
                  max:10
                }),
                PropertyPaneToggle('Toggle', {
                label: ""
                }),
                PropertyPaneDropdown('dropdown', {
                  label:'Drop Down',
                  options: [
                    { key: 'Item1', text: 'Item 1' },
                    { key: 'Item2', text: 'Item 2' },
                    { key: 'Item3', text: 'Item 3'}
                  ]
                }),
                PropertyPaneCheckbox('checkbox',
                  { text: 'Yes/No'})
              ]
            }
          ]
        },
        {
          header: {
            description: "COMPANY DETAILS - PAGE 3"
          },
          groups: [
            {
              groupName: "EXTRA INFORMATION",
              groupFields: [
                PropertyPaneLink('URL',
                  { text:"My Blog", href:'http://www.jenkinsblogs.com',target:'_blank'})
              ]
            }
          ]
        }
      ]
    };
  }
}

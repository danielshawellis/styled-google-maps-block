import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { TreeSelect } from 'primereact/treeselect';
import { Divider } from 'primereact/divider';
import { ColorPicker } from 'primereact/colorpicker';
import { InputNumber } from 'primereact/inputnumber';

import { BlockEditProps } from '@wordpress/blocks';
import { MapSettings } from './types';

import { useState } from 'react';

const featureNodes = [
  {
    "key": "all",
    "label": "All"
  },
  {
    "key": "administrative",
    "label": "Administrative",
    "children": [
      {
        "key": "administrative.country",
        "label": "Country",
      },
      {
        "key": "administrative.land_parcel",
        "label": "Land Parcel",
      },
      {
        "key": "administrative.locality",
        "label": "Locality",
      },
      {
        "key": "administrative.neighborhood",
        "label": "Neighborhood",
      },
      {
        "key": "administrative.province",
        "label": "Province",
      }
    ]
  },
];

const elementNodes = [
  {
    key: "all",
    label: "All"
  },
  {
    key: "geometry",
    label: "Geometry",
    children: [
      {
        key: "geometry.fill",
        label: "Geometry Fill",
      },
      {
        key: "geometry.stroke",
        label: "Geometry Stroke",
      }
    ]
  },
  {
    key: "labels",
    label: "Labels",
    children: [
      {
        key: "labels.icon",
        label: "Label Icons",
      },
      {
        key: "labels.text",
        label: "Label Text",
        children: [
          {
            key: "labels.text.fill",
            label: "Label Text Fill"
          },
          {
            key: "labels.text.stroke",
            label: "Label Text Stroke"
          }
        ]
      }
    ]
  }
];

const visibilityOptions = [
  {label: 'Hidden', value: 'hidden'},
  {label: 'Simplified', value: 'simplified'},
  {label: 'Shown', value: 'shown'},
];

export const Styler = ({ visible, onHide, attributes, setAttributes }: { visible: boolean, onHide: () => void, attributes: MapSettings, setAttributes: (attributes: Partial<MapSettings>) => void }) => {
  // Set up component state
  const [stylerIsOpen, setStylerIsOpen] = useState<boolean>(false);
  const [featureType, setFeatureType] = useState<string>("all");
  const [elementType, setElementType] = useState<string>("all");
  const [visibility, setVisibility] = useState<'hidden' | 'simplified' | 'shown' | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [saturation, setSaturation] = useState<number | null>(null);
  const [lightness, setLightness] = useState<number | null>(null);

  // Define inner templates
  const header = () => <div className='p-d-flex p-jc-between p-ai-center'>
    <strong className="p-mr-3">Styles</strong>
    <Button label="Add New Style" icon="pi pi-plus" onClick={() => setStylerIsOpen(true)} />
  </div>;
  const fetureTypeTemplate = (rowData) => <span>{ rowData.featureType ?? 'all' }</span>;
  const elementTypeTemplate = (rowData) => <span>{ rowData.elementType ?? 'all' }</span>;
  const buttonsTemplate = (rowData) => <div>
    <Button label="Edit" icon="pi pi-pencil" className="p-mr-2" />
    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" />
  </div>;

  // Define the save funcation
  const save = () => {
    const _featureType = featureType;
    const _elementType = elementType;

    if (!featureType || !elementType) return;

    setAttributes({ 
      styles: [ 
        ...attributes.styles,
        {
          featureType: _featureType,
          elementType: _elementType,
          stylers: {
            ...(visibility && { visibility })
          }
        }
      ] 
    });

    console.log(attributes);
  };

  return(
    <Dialog visible={ visible } onHide={ onHide } maximizable={ true }>
      { !stylerIsOpen && <DataTable value={ attributes.styles } header={ header } emptyMessage="No styles are currently set" >
        <Column header="Feature Type" body={ fetureTypeTemplate } />
        <Column header="Element Type" body={ elementTypeTemplate } />
        <Column body={ buttonsTemplate } />
      </DataTable> }

      { stylerIsOpen && <div>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col">
            <label htmlFor="feature-type-select">Feture Type</label>
            <TreeSelect value={ featureType } options={ featureNodes } filter onChange={ ({ value }) => setFeatureType(value) } inputId="feature-type-select" />
          </div>
          <div className="p-field p-col">
            <label htmlFor="element-type-select">Element Type</label>
            <TreeSelect value={ elementType } options={ elementNodes } filter onChange={ ({ value }) => setElementType(value) } inputId="element-type-select" />
          </div>
        </div>
        <Divider align="center">
          <span>Styles</span>
        </Divider>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col">
            <label htmlFor="visibility-dropdown">Visibility</label>
            <Dropdown value={ visibility } options={ visibilityOptions } onChange={ ({ value }) => setVisibility(value) } placeholder="Inherit Visibility" showClear={ true } inputId="visibility-dropdown" />
          </div>
          <div className="p-field p-col">
            <label htmlFor="color-input">Color</label>
            <ColorPicker value={ color } onChange={ ({ value }) => setColor(value) } inputId="color-input" />
          </div>
          <div className="p-field p-col">
            <label htmlFor="weight-input">Weight</label>
            <InputNumber value={ weight } onChange={ ({ value }) => setWeight(value) } id="weight-input" />
          </div>
        </div>
        <div>
          <Button label="Save" onClick={ save } />
        </div>
      </div> }
    </Dialog>
  )
};
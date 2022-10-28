import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import { BlockEditProps } from '@wordpress/blocks';
import { MapSettings } from './types';

export const Styler = ({ visible, onHide, attributes, setAttributes }: { visible: boolean, onHide: () => void, attributes: MapSettings, setAttributes: (attributes: MapSettings) => void }) => {
  const styleNameTemplate = (rowData) => <span>{ rowData.featureType ?? 'all' } - { rowData.elementType ?? 'all' }</span>;
  const header = () => <div className='p-d-flex p-jc-between'>
    <strong>Styles</strong>
    <Button label="Add New Style" icon="pi pi-plus" />
  </div>

  return(
    <Dialog visible={ visible } onHide={ onHide } maximizable={ true }>
      <DataTable value={ attributes.styles } header={ header }>
        <Column header="Style Name" body={ styleNameTemplate }></Column>
      </DataTable>
    </Dialog>
  )
};
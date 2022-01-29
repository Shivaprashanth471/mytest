import { IconButton, TableRow, TextField, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

interface ReferenceReadOnlyRowProps {
  reference: any;
  openAdd: any;
  index?: number
}

const ReadOnlyRow = ({ reference, openAdd }: ReferenceReadOnlyRowProps) => {
  return (
    <TableRow>
      <td>
        <TextField
          InputProps={{
            disableUnderline: true,
          }}
          value={reference.reference_name}
          disabled
        />
      </td>
      <td>
        <TextField
          InputProps={{
            disableUnderline: true,
          }}
          value={reference.job_title}
          disabled
        />
      </td>
      <td>
        <TextField
          InputProps={{
            disableUnderline: true,
          }}
          value={reference.phone}
          disabled
        />
      </td>

      <td>
        <TextField
          InputProps={{
            disableUnderline: true,
          }}
          value={reference.email ? reference.email : 'NA'}
          disabled
        />
      </td>

      <td>
      <Tooltip title={`Delete References`}>
        <IconButton onClick={() => openAdd(reference?._id)}>
          <DeleteIcon className="delete-icon" />
        </IconButton>
        </Tooltip>
      </td>
    </TableRow>
  );
};

export default ReadOnlyRow;

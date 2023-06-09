// ** React Imports
import { Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ** Custom Components
import Avatar from '@components/avatar';

// ** Store & Actions
import { store } from '@store/store';
// import { deleteInvoice } from '../store'

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  Button
} from 'reactstrap';

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle,
  BookOpen
} from 'react-feather';

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
};

import DocModal from './DocModal';

// ** renders client column
const renderClient = (row) => {
  const stateNum = Math.floor(Math.random() * 6),
    states = [
      'light-success',
      'light-danger',
      'light-warning',
      'light-info',
      'light-primary',
      'light-secondary'
    ],
    color = states[stateNum];

  if (row.avatar.length) {
    return <Avatar className="me-50" img={row.avatar} width="32" height="32" />;
  } else {
    return (
      <Avatar
        color={color}
        className="me-50"
        content={row.client ? row.client.name : 'John Doe'}
        initials
      />
    );
  }
};

// ** Table columns
export const columns = [
  {
    sortable: true,
    name: 'Date',
    sortField: 'date',
    cell: ((row) => {
        const date = new Date(row.date)
        var noTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return noTime.toDateString()
      }
    )
    // selector: row => row.dueDate
  },
  // {
  //   name: '#',
  //   sortable: true,
  //   sortField: 'id',
  //   // selector: row => row._id,
  //   cell: (row) => <Link to={`/apps/invoice/preview/${row._id}`}>{`#${row._id}`}</Link>
  // },
  // {
  //   sortable: true,
  //   minWidth: '102px',
  //   sortField: 'invoiceStatus',
  //   name: <TrendingUp size={14} />,
  //   // selector: row => row.invoiceStatus,
  //   cell: row => {
  //     const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
  //       Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
  //     return (
  //       <Fragment>
  //         <Avatar color={color} icon={<Icon size={14} />} id={`av-tooltip-${row._id}`} />
  //         <UncontrolledTooltip placement='top' target={`av-tooltip-${row._id}`}>
  //           <span className='fw-bold'>{row.invoiceStatus}</span>
  //           <br />
  //           <span className='fw-bold'>Balance:</span> {row.balance}
  //           <br />
  //           <span className='fw-bold'>Due Date:</span> {row.dueDate}
  //         </UncontrolledTooltip>
  //       </Fragment>
  //     )
  //   }
  // },
  // {
  //   name: 'Client',
  //   sortable: true,
  //   minWidth: '350px',
  //   sortField: 'client.name',
  //   // selector: row => row.client.name,
  //   cell: row => {
  //     const name = row.client ? row.client.name : 'John Doe',
  //       email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
  //     return (
  //       <div className='d-flex justify-content-left align-items-center'>
  //         {renderClient(row)}
  //         <div className='d-flex flex-column'>
  //           <h6 className='user-name text-truncate mb-0'>{name}</h6>
  //           <small className='text-truncate text-muted mb-0'>{email}</small>
  //         </div>
  //       </div>
  //     )
  //   }
  // },
  {
    name: 'Name',
    sortable: true,
    sortField: 'name',
    // selector: row => row.client.name,
    cell: (row) => {
      const name = row.name ? row.name : 'John Doe';
      return <span>{name}</span>;
    }
  },
  {
    name: 'Type',
    sortable: true,
    sortField: 'name',
    // selector: row => row.total,
    cell: (row) => <span>${row.categoryId.title || 'One Time'}</span>
  },
  {
    name: 'Total',
    sortable: true,
    sortField: 'amount',
    // selector: row => row.total,
    cell: (row) => <span>${row.amount || 0}</span>
  },
  {
    sortable: true,
    name: 'URL',
    // sortField: 'income',
    // selector: row => row._id,
    cell: (row) => {
      return (
        <Link
          to={row.categoryId.type === "income" ? `/apps/income/preview/${row._id}`: `/apps/expense/preview/${row._id}`}
          className="hovertext"
          data-hover={row.categoryId.type === "income" ? "See Income" : "See Expense"}
        ><BookOpen size={17} /></Link>
      );
    }
  },
  {
    name: 'Proof',
    // sortField: 'total',
    // selector: row => row.total,
    cell: (row) => {
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
      return <DocModal modal={modal} toggle={toggle} />;
    }
  },
  {
    name: 'Action',
    minWidth: '110px',
    cell: (row) => (
      <div className="column-action d-flex align-items-center">
        <Send className="cursor-pointer" size={17} id={`send-tooltip-${row._id}`} />
        <UncontrolledTooltip placement="top" target={`send-tooltip-${row._id}`}>
          Send Mail
        </UncontrolledTooltip>
        <Link to={`/apps/Income/preview/${row._id}`} id={`pw-tooltip-${row._id}`}>
          <Eye size={17} className="mx-1" />
        </Link>
        <UncontrolledTooltip placement="top" target={`pw-tooltip-${row._id}`}>
          Preview {row.categoryId.type === "income" ? "Income" : "Expense"}
        </UncontrolledTooltip>
        <UncontrolledDropdown>
          <DropdownToggle tag="span">
            <MoreVertical size={17} className="cursor-pointer" />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem tag="a" href="/" className="w-100" onClick={(e) => e.preventDefault()}>
              <Download size={14} className="me-50" />
              <span className="align-middle">Download</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row._id}`} className="w-100">
              <Edit size={14} className="me-50" />
              <span className="align-middle">Edit</span>
            </DropdownItem>
            <DropdownItem
              tag="a"
              href="/"
              className="w-100"
              onClick={(e) => {
                e.preventDefault();
                // store.dispatch(deleteInvoice(row._id))
              }}
            >
              <Trash size={14} className="me-50" />
              <span className="align-middle">Delete</span>
            </DropdownItem>
            <DropdownItem tag="a" href="/" className="w-100" onClick={(e) => e.preventDefault()}>
              <Copy size={14} className="me-50" />
              <span className="align-middle">Duplicate</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
];

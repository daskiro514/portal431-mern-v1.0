import React from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../../../utils/formatDate1'
import { getDocumentList } from '../../../utils/clientDocuments'
import { updateClientDocumentStatus } from '../../../actions/admin'

const AdminClientDocuments = ({ client, updateClientDocumentStatus }) => {

  return (
    <div className='bg-white rounded-lg p-3 mt-3'>
      <div className='row'>
        <div className='col-md-6'>First Name:</div>
        <div className='col-md-6 pl-4'>{client.firstName}</div>
        <div className='col-md-6'>Last Name:</div>
        <div className='col-md-6 pl-4'>{client.lastName}</div>
        <div className='col-md-6'>Email Address:</div>
        <div className='col-md-6 pl-4'>{client.email}</div>
        <div className='col-md-6'>Phone Number:</div>
        <div className='col-md-6 pl-4'>{client.phoneNumber}</div>
        <div className='col-md-6'>D.O.B:</div>
        <div className='col-md-6 pl-4'>{formatDate(client.dateOfBirth)}</div>
        <div className='col-md-6'>Name of Facebook Shop LLC:</div>
        <div className='col-md-6 pl-4'>{client.nameOfLLC}</div>
        <div className='col-md-6'>EIN of LLC:</div>
        <div className='col-md-6 pl-4'>{client.einOfLLC}</div>
        <div className='col-md-6'>Address on file of LLC:</div>
        <div className='col-md-6 pl-4'>{client.addressOfLLC}</div>
        <div className='col-md-6'>Name Of Store:</div>
        <div className='col-md-6 pl-4'>{client.nameOfStore}</div>
        <div className='col-md-6'>Bank Account Number for Sales Revenue:</div>
        <div className='col-md-6 pl-4'>{client.bankAccount}</div>
        <div className='col-md-6'>Bank Routing Number for Sales Revenue:</div>
        <div className='col-md-6 pl-4'>{client.bankRouting}</div>
        <div className='col-md-6'>Facebook Login Email:</div>
        <div className='col-md-6 pl-4'>{client.emailOfFacebook}</div>
        <div className='col-md-6'>Facebook Login Password:</div>
        <div className='col-md-6 pl-4'>{client.passwordOfFacebook}</div>
      </div>

      <div className='table-responsive pt-4'>
        <table className='table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Document</th>
              <th>Content</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getDocumentList(client).map((item, index) =>
              <tr key={index}>
                <td>{formatDate(client.date)}</td>
                <td>{item.name}</td>
                <td style={{
                  maxWidth: '200px',
                  wordBreak: 'break-all'
                }}><a href={item.path} target='_blank' rel='noreferrer'>{item.path}</a></td>
                <td><span className={item.status === 'Pending' ? 'text-danger' : 'text-secondary'}>{item.status}</span></td>
                <td>
                  <button onClick={() => {
                    updateClientDocumentStatus(client._id, item.keyInDB, 'Approve')
                  }} className='badge badge-info mr-2'>Approve</button>
                  <button onClick={() => {
                    updateClientDocumentStatus(client._id, item.keyInDB, 'Deny')
                  }} className='badge badge-pending'>Deny</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  client: state.admin.adminClient
})

export default connect(mapStateToProps, { updateClientDocumentStatus })(AdminClientDocuments)
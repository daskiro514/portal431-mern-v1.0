import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { useHistory } from "react-router-dom"
import { setCurrentPage } from '../../actions/admin'

const ClientSidebar = ({ logout, setCurrentPage, currentPage }) => {
  let history = useHistory()

  // const goPage = async location => {
  //   await history.push(`/`)
  //   await history.push(`/dashboard`)
  //   await history.push(`/dashboard/${location}`)
  // }

  const goPage = async location => {
    setCurrentPage(location)
    await history.push(`/`)
    await history.push(`/dashboard`)

    if (location === 'dashboard') {
      await history.push(`/dashboard/`)
      return
    }
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='col-lg-2 p-2 sidebar'>
      <div className='container-fluid'>
        <div className='row m-1 p-2 h5 bg-white rounded-lg'>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <div>
              <i className='fa fa-heart-o pt-2 mr-2 h6' style={{ color: '#A78BE2' }}></i>
              <span>ProtoType</span>
            </div>
            <i className='fa fa-align-justify pt-2 mr-2 h6' style={{ color: '#A78BE2' }}></i>
          </div>
        </div>
        <div className='row mx-1 pt-4 h5'>
          Menu
        </div>
        <div className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'dashboard' ? 'selected' : '')} onClick={() => goPage('dashboard')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-map-pin pt-2 mr-2 pr-1 h6'></i>
            <span>Store Report</span>
          </div>
        </div>
        <div className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'messages' ? 'selected' : '')} onClick={() => goPage('messages')}>
          <div className='d-flex align-items-center'>
            <div><i className='fa fa-wechat mr-2 h6'></i></div>
            <div>Messages</div>
          </div>
        </div>
        <div className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'account' ? 'selected' : '')} onClick={() => goPage('account')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-database pt-2 mr-2 h6'></i>
            <span>My Account</span>
          </div>
        </div>
        <div className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'education' ? 'selected' : '')} onClick={() => goPage('education')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-file-video-o pt-2 mr-2 h6'></i>
            <span>Education</span>
          </div>
        </div>
        {/* <div className='row mx-1 h5 menuItem' onClick={() => goPage('store-manage')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-map-pin pt-2 mr-2 pr-1 h6'></i>
            <span>Store Management</span>
          </div>
        </div>
        <div className='row mx-1 h5 menuItem' onClick={() => goPage('settings')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-clock-o pt-2 mr-2 h6'></i>
            <span>Settings</span>
          </div>
        </div> */}
        <div className='row mx-1 h5 menuItem rounded p-1 signoutLink' onClick={() => {
          setCurrentPage('dashboard')
          logout()
        }}>
          <div className='d-flex align-items-center'>
            <div><i className='fa fa-sign-out mr-2 h6'></i></div>
            <div>Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentPage: state.admin.currentPage
})

export default connect(mapStateToProps, { logout, setCurrentPage })(ClientSidebar)

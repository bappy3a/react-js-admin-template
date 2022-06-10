function Home() {
    return (
        <main className="main-content position-relative border-radius-lg">
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="false">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm">
                            <a className="opacity-5 text-white" href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item text-sm text-white active" aria-current="page">
                            Dashboard
                        </li>
                    </ol>
                    <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group">
                            <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" placeholder="Type here..." />
                        </div>
                    </div>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item d-flex align-items-center">
                            <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                                <i className="fa fa-user me-sm-1"></i>
                                <span className="d-sm-inline d-none">Sign In</span>
                            </a>
                        </li>
                        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                            <a href="javascript:;" className="nav-link text-white p-0" id="iconNavbarSidenav">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item px-3 d-flex align-items-center">
                            <a href="javascript:;" className="nav-link text-white p-0">
                                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown pe-2 d-flex align-items-center">
                            <a href="javascript:;" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-bell cursor-pointer"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                <li className="mb-2">
                                    <a className="dropdown-item border-radius-md" href="javascript:;">
                                        <div className="d-flex py-1">
                                            <div className="my-auto">
                                                <img src="./assets/img/team-2.jpg" className="avatar avatar-sm me-3" />
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="text-sm font-weight-normal mb-1">
                                                    <span className="font-weight-bold">New message</span>
                                                    from Laur
                                                </h6>
                                                <p className="text-xs text-secondary mb-0">
                                                    <i className="fa fa-clock me-1"></i>
                                                    13 minutes ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="dropdown-item border-radius-md" href="javascript:;">
                                        <div className="d-flex py-1">
                                            <div className="my-auto">
                                                <img src="./assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark me-3" />
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="text-sm font-weight-normal mb-1"><span className="font-weight-bold">New album</span> by Travis Scott</h6>
                                                <p className="text-xs text-secondary mb-0">
                                                    <i className="fa fa-clock me-1"></i>
                                                    1 day
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item border-radius-md" href="javascript:;">
                                        <div className="d-flex py-1">
                                            <div className="avatar avatar-sm bg-gradient-secondary me-3 my-auto">
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="text-sm font-weight-normal mb-1">
                                                    Payment successfully completed
                                                </h6>
                                                <p className="text-xs text-secondary mb-0">
                                                    <i className="fa fa-clock me-1"></i>
                                                    2 days
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                            Today's Money
                                        </p>
                                        <h5 className="font-weight-bolder">$53,000</h5>
                                        <p className="mb-0">
                                            <span className="text-success text-sm font-weight-bolder">+55%</span>
                                            since yesterday
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                        <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                            Today's Users
                                        </p>
                                        <h5 className="font-weight-bolder">2,300</h5>
                                        <p className="mb-0">
                                            <span className="text-success text-sm font-weight-bolder">+3%</span>
                                            since last week
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                        <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                            New Clients
                                        </p>
                                        <h5 className="font-weight-bolder">+3,462</h5>
                                        <p className="mb-0">
                                            <span className="text-danger text-sm font-weight-bolder">-2%</span>
                                            since last quarter
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                        <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                            Sales
                                        </p>
                                        <h5 className="font-weight-bolder">$103,430</h5>
                                        <p className="mb-0">
                                            <span className="text-success text-sm font-weight-bolder">+5%</span>
                                            than last month
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                        <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-7 mb-lg-0 mb-4">
                    <div className="card">
                        <div className="card-header pb-0 p-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-2">Sales by Country</h6>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table align-items-center">
                                <tbody>
                                    <tr>
                                        <td className="w-30">
                                            <div className="d-flex px-2 py-1 align-items-center">
                                                <div>
                                                    <img src="./assets/img/icons/flags/US.png" alt="Country flag" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-xs font-weight-bold mb-0">
                                                        Country:
                                                    </p>
                                                    <h6 className="text-sm mb-0">United States</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                <h6 className="text-sm mb-0">2500</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                <h6 className="text-sm mb-0">$230,900</h6>
                                            </div>
                                        </td>
                                        <td className="align-middle text-sm">
                                            <div className="col text-center">
                                                <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                <h6 className="text-sm mb-0">29.9%</h6>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-30">
                                            <div className="d-flex px-2 py-1 align-items-center">
                                                <div>
                                                    <img src="./assets/img/icons/flags/DE.png" alt="Country flag" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-xs font-weight-bold mb-0">
                                                        Country:
                                                    </p>
                                                    <h6 className="text-sm mb-0">Germany</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                <h6 className="text-sm mb-0">3.900</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                <h6 className="text-sm mb-0">$440,000</h6>
                                            </div>
                                        </td>
                                        <td className="align-middle text-sm">
                                            <div className="col text-center">
                                                <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                <h6 className="text-sm mb-0">40.22%</h6>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-30">
                                            <div className="d-flex px-2 py-1 align-items-center">
                                                <div>
                                                    <img src="./assets/img/icons/flags/GB.png" alt="Country flag" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-xs font-weight-bold mb-0">
                                                        Country:
                                                    </p>
                                                    <h6 className="text-sm mb-0">Great Britain</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                <h6 className="text-sm mb-0">1.400</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                <h6 className="text-sm mb-0">$190,700</h6>
                                            </div>
                                        </td>
                                        <td className="align-middle text-sm">
                                            <div className="col text-center">
                                                <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                <h6 className="text-sm mb-0">23.44%</h6>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-30">
                                            <div className="d-flex px-2 py-1 align-items-center">
                                                <div>
                                                    <img src="./assets/img/icons/flags/BR.png" alt="Country flag" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-xs font-weight-bold mb-0">
                                                        Country:
                                                    </p>
                                                    <h6 className="text-sm mb-0">Brasil</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                <h6 className="text-sm mb-0">562</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                <h6 className="text-sm mb-0">$143,960</h6>
                                            </div>
                                        </td>
                                        <td className="align-middle text-sm">
                                            <div className="col text-center">
                                                <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                <h6 className="text-sm mb-0">32.14%</h6>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-header pb-0 p-3">
                            <h6 className="mb-0">Categories</h6>
                        </div>
                        <div className="card-body p-3">
                            <ul className="list-group">
                                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                            <i className="ni ni-mobile-button text-white opacity-10"></i>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-1 text-dark text-sm">Devices</h6>
                                            <span className="text-xs">250 in stock, <span className="font-weight-bold">346+ sold</span></span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                            <i className="ni ni-bold-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                            <i className="ni ni-tag text-white opacity-10"></i>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-1 text-dark text-sm">Tickets</h6>
                                            <span className="text-xs">123 closed, <span className="font-weight-bold">15 open</span></span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                            <i className="ni ni-bold-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                            <i className="ni ni-box-2 text-white opacity-10"></i>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-1 text-dark text-sm">Error logs</h6>
                                            <span className="text-xs">1 is active, <span className="font-weight-bold">40 closed</span></span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                            <i className="ni ni-bold-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                            <i className="ni ni-satisfied text-white opacity-10"></i>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-1 text-dark text-sm">Happy users</h6>
                                            <span className="text-xs font-weight-bold">+ 430</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                            <i className="ni ni-bold-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer pt-3">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                ©
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                , made with <i className="fa fa-heart"></i> by
                                <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                                for a better web.
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </main>
    );
  }

export default Home;
import React from "react";

export default function Header() {
	return (
		<nav classname="navbar navbar-expand-md navbar-dark bg-dark">
			<div classname="container-fluid">
				<a href="#" classname="navbar-brand">
					CyberSoft
				</a>
				<button classname="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
					<span classname="navbar-toggler-icon"></span>
				</button>
				<div classname="collapse navbar-collapse" id="myMenu">
					<ul classname="navbar-nav ml-auto">
						<li classname="nav-item">
							<a href="#" classname="nav-link active">
								Home
							</a>
						</li>
						<li classname="nav-item">
							<a href="#" classname="nav-link">
								News
							</a>
						</li>
						<li classname="nav-item dropdown">
							<a href="#" classname="nav-link" data-toggle="dropdown">
								Products
							</a>
							<div classname="dropdown-menu">
								<a href="#" classname="dropdown-item">
									Smarphone
								</a>
								<a href="#" classname="dropdown-item">
									Laptop
								</a>
							</div>
						</li>
						<li classname="nav-item">
							<a href="#" classname="nav-link">
								Forum
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

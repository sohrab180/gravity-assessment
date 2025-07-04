import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="header-content">
                    <h1 className="home-title">Assessment Solutions</h1>
                    <p className="home-subtitle">
                         Please find my assessment submission for your review.
                        <span className="subtitle-decoration"></span>
                    </p>
                </div>
            </header>
            
            <main className="home-main">
                <div className="cards-container">
                    <Link to="/dsa" className="solution-card card-1">
                        <div className="card-icon">
                            <i className="fas fa-code"></i>
                            <div className="icon-backdrop"></div>
                        </div>
                        <h2>DSA Problems</h2>
                        <p>Algorithm solutions with interactive demos</p>
                        <div className="card-cta">
                            View Solutions <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="card-hover-effect"></div>
                    </Link>
                    
                    <Link to="/mongodb" className="solution-card card-2">
                        <div className="card-icon">
                            <i className="fas fa-database"></i>
                            <div className="icon-backdrop"></div>
                        </div>
                        <h2>MongoDB Aggregation</h2>
                        <p>Complex data processing pipeline examples</p>
                        <div className="card-cta">
                            View Pipeline <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="card-hover-effect"></div>
                    </Link>
                    
                    <Link to="/todo" className="solution-card card-3">
                        <div className="card-icon">
                            <i className="fas fa-tasks"></i>
                            <div className="icon-backdrop"></div>
                        </div>
                        <h2>Todo App</h2>
                        <p>Full-featured task management application</p>
                        <div className="card-cta">
                            Try Demo <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="card-hover-effect"></div>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
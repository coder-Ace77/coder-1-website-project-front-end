import React from 'react';
import '../css/Profile.css';
import CustomList from '../components/CustomList';
import NavBar from '../components/nav_bar';
import ProfilePicture from '../components/ProfilePicture';
import HeatMap from '@uiw/react-heat-map';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';


const ProfilePage = () => {
    const list = ['Question1', 'Question1', 'Question1', 'Question1', 'Question1', 'Question1', 'Question1', 'Question1', 'Question1'];

    const value = [
        { date: '2016/01/11', count: 2 },
        { date: '2016/01/12', count: 20 },
        { date: '2016/01/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/11', count: 2 },
        { date: '2016/05/01', count: 5 },
        { date: '2016/05/02', count: 5 },
        { date: '2016/05/04', count: 11 },
    ];

    const data = [
        {
            color: "steelblue",
            points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }, { x: 9, y: 20 }, { x: 10, y: 15 }, { x: 12, y: 100 }]
        }
    ];

    return (
        <div>
            <NavBar />
        <div className="profile-page">
                <div className="left-sidebar">
                    <div className="sidebar-section">
                        <h2>Top Blogs</h2>
                        <CustomList items={["Blog1", "Blog1", "Blog1", "Blog1", "Blog1", "Blog1", "Blog1",]}/>
                    </div>
                    <div className="sidebar-section">
                        <h2>Recent Blogs</h2>
                        <CustomList items={["Blog1", "Blog1", "Blog1", "Blog1", "Blog1", "Blog1", "Blog1",]} />
                    </div>
                </div>

            <div className="left-main">
                <div className="personal-details">
                    <div className="details">
                        <h2>Personal Details</h2>
                        <div className="detail-item">
                            <div className="detail-label">Name:</div>
                            <div className="detail-value">John Doe</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">User Tag:</div>
                            <div className="detail-value">@johndoe</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">No of Contests Participated:</div>
                            <div className="detail-value">10</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">Current Rating:</div>
                            <div className="detail-value">1850</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">Total Questions Solved:</div>
                            <div className="detail-value">150</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">Email:</div>
                            <div className="detail-value">john.doe@example.com</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">Institute:</div>
                            <div className="detail-value">XYZ University</div>
                        </div>
                    </div>
                        <div className="profile-picture">
                            <ProfilePicture src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt="Profile Picture" />
                        </div>
                </div>

                <div className="rating-graph">
                    <h2>Rating Graph</h2>
                        <div className="graph-components">
                            <HeatMap className='comp1'
                                width={500}
                                style={{ color: '#ad001d', '--rhm-rect-active': 'red' }}
                                startDate={new Date('2016/01/01')}
                                value={value}
                                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                            />
                            <LineChart
                                className='comp2'
                                width={500}
                                height={200}
                                data={data}
                                color="steelblue"
                            />
                        </div>
                </div>

                <div className="solved-questions">
                    <h2>Solved Questions</h2>
                    <CustomList items={list} />
                </div>
            </div>

            <div className="right-sidebar">
                <div className="top-solvers">
                    <h2>Top Problem Solvers</h2>
                        <CustomList items={['User A', 'User A', 'User A', 'User A', 'User A']}/>
                </div>

                <div className="recent-questions">
                    <h2>Recent Questions Added</h2>
                        <CustomList items={['Ques 1', 'Ques 1', 'Ques 1', 'Ques 1', 'Ques 1', 'Ques 1', 'Ques 1', 'Ques 1',]}/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProfilePage;

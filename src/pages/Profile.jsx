import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Profile.css';
import CustomList from '../components/CustomList';
import NavBar from '../components/nav_bar';
import ProfilePicture from '../components/ProfilePicture';
import HeatMap from '@uiw/react-heat-map';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [solvedQuestions, setSolvedQuestions] = useState([]);
    const [value, setValue] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/checklogin', { withCredentials: true });
                if (response.data.isLoggedIn) {
                    console.log('User is logged in');
                    console.log(response.data.user);
                    setUserData(response.data.user);
                    setSolvedQuestions(response.data.user.solved_ques);
                    const dailyLog = response.data.user.dailyLog.map(log => ({
                        date: new Date(log.date).toISOString().split('T')[0],
                        count: log.solved
                    }));
                    setValue(dailyLog);

                    const ratingData = response.data.user.contests.map((contest, idx) => ({
                        x: idx + 1,
                        y: contest.delta
                    }));
                    setData([{ color: "steelblue", points: ratingData }]);
                } else {
                    console.log('User is not logged in');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

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
                                <div className="detail-value">{userData.name}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">User Tag:</div>
                                <div className="detail-value">@{userData.user}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">No of Contests Participated:</div>
                                <div className="detail-value">{userData.contests.length}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Current Rating:</div>
                                <div className="detail-value">{userData.rating}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Total Questions Solved:</div>
                                <div className="detail-value">{userData.solved_ques.length}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Email:</div>
                                <div className="detail-value">{userData.email}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Institute:</div>
                                <div className="detail-value">{userData.institute}</div>
                            </div>
                        </div>
                        <div className="profile-picture">
                            <ProfilePicture src={userData.image || 'default_profile_image.png'} alt="Profile Picture" />
                        </div>
                    </div>

                    <div className="rating-graph">
                        <h2>Rating Graph</h2>
                        <div className="graph-components">
                            <HeatMap
                                className='comp1'
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
                        <CustomList items={userData.solved_ques} />
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

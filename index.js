setInterval(() => {
    d = new Date();
    h_time = d.getHours();
    m_time = d.getMinutes();
    s_time = d.getSeconds();
    h_rotate = 30*h_time + m_time/2;
    m_rotate = 6*m_time;
    s_rotate = 6*s_time;

    hour.style.transform = `rotate(${h_rotate}deg)`;
    minute.style.transform = `rotate(${m_rotate}deg)`;
    second.style.transform = `rotate(${s_rotate}deg)`;
}, 1000);
import React from 'react'

const Spacer = ({ children }) => {

    const styles = {
        spacer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 10
        }
    };

    return (
        <div style={styles.spacer}>
            {children}
        </div>
    )
}

export default Spacer

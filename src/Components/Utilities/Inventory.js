import React, { Component } from 'react';

export default class Inventory extends Component {

  render() {
    
    // Functions that have been passed down from the Interface component
    // These functions check the player's inventory to conditionally display the corresponding images
    const { hasKey, hasLetter, hasNote, hasLockPick, hasBrokenLockPick } = this.props;

    return (

      //Conditionally display images within the inventory based on the items that the player has obtained

      <div className="inventory">
        <h4>Inventory</h4>

        {/* Display key */}
        {
          hasKey && (
            <div className="inv-item">
              <p>1x Rusted Key</p>
              <img src={'inventory/key.png'} alt="key" className="inv-png" />
            </div>
          )
        }
        {/* Display letter */}
        {
          hasLetter && (
            <div className="inv-item">
              <p>1x Letter</p>
              <img
                src={'inventory/letter.png'}
                alt="letter"
                className="inv-png"
              />
            </div>
          )
        }
        {/* Display note */}
        {
          hasNote && (
            <div className="inv-item">
              <p>1x Torn Note</p>
              <img src={'inventory/note.png'} alt="note" className="inv-png" />
            </div>
          )
        }
        {/* Display lockpick */}
        {
          hasLockPick && (
            <div className="inv-item">
              <p>1x Old Lock Pick</p>
              <img
                src={'inventory/lockpick.png'}
                alt="lockpick"
                className="inv-png"
              />
            </div>
          )
        }
        {/* Display broken lockpick */}
        {
          hasBrokenLockPick && (
            <div className="inv-item">
              <p>1x Old and Broken Lock Pick</p>
              <img
                src={'inventory/lockpick_bw.png'}
                alt="lockpick"
                className="inv-png"
              />
            </div>
          )
        }
      </div>
    );
  }
}

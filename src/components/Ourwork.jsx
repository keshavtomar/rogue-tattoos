import React from 'react'
import '../styles/ourwork.css'


export default function Ourwork() {
    return (
        <div className='ourwork-section'>
            <h2>
                <span className='line-pass'>
                    What we do
                </span>
            </h2>
            <p className='work-define'></p>
            <div className='ourwork'>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/permanent-tattoo.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Permanent Tattoos</h5>
                    <p className='word-define'>Express your individuality with lasting artwork that becomes a part of you.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/customise-designs.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Customise Designs</h5>
                    <p className='word-define'>Bring your unique vision to life through personalized and tailor-made tattoo creations.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/cover-up-tattoo.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Cover up Tattoos</h5>
                    <p className='word-define'>Transform old tattoos into fresh and stunning designs that breathe new life into your skin.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/tattoo-redifining.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Tattoos redifining</h5>
                    <p className='word-define'>Push the boundaries of art and self-expression with tattoos that challenge norms and redefine beauty.</p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/tattoo-training.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Tattoos training</h5>
                    <p className='word-define'>Learn the art of tattooing through comprehensive training programs designed to nurture your skills.
                    </p>
                </div>
                <div className='work-card'>
                    <div className='work-icon'>
                        <img src='images/ourwork/tattoos-removal.svg' alt='permanent-tattoo'></img>
                    </div>
                    <h5 className='work-heading'>Tattoos removal</h5>
                    <p className='word-define'>Say goodbye to unwanted tattoos with safe and effective removal techniques that help you start anew.</p>
                </div>
            </div>
        </div >
    )
}

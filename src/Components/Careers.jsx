import React from 'react'

export default function Careers() {
    return (
        <div>
          <div className="bg-white pt-1 pb-10">
            <h1 className="text-center font-bold text-2xl mb-3 mt-7">Careers</h1>
              <h2>Join our Team!</h2>
              <div className="text-center mx-8 mt-4">
                <p>Brian's Burger Bash loves to hire smiling faces and brilliant attitudes to join our ever-growing 
                    team of associates!</p>
                <p>Here at BBB's we offer equal opportunity employment with health benefits and vacation time starting after the first 30 days!</p>
                <p>Compeditive living wages and flexible hours is one of our biggest joys we can give to our employees.</p>
                <p>If all of this sounds good to you then please feel free to contact us for any avilable open position! Interviews are done in-person 
                    Mondays and Wednesdays at 10am and 3pm.</p>
              </div>
          </div>
            <div className="flex flex-wrap text-center mx-8 mt-8 mb-48">
              <div className="position">
                <h2>Cashier</h2>
                    <p className="mx-4 my-4">Our cashier position requires people to have a welcoming presence that greets customer's with a smile! 
                        We require all cashier's to be able to work front area computers by taking orders and present them 
                        in a timely manner.</p>
                    <p><b>Experience required:</b> 0 years.</p>
              </div>
              <div className="position">
                <h2>Cook</h2>
                    <p className="mx-4 my-4">Our cook positions require the utmost sanitary expectations when preparing the food for our 
                        customers. Daily cleaning checks are taken very seriously, and health reports are randomized. 
                        Cooks are required to maintain their work area and utensils that are needed to complete their jobs.</p>
                    <p><b>Experience required:</b> 1-2 years culinary exp.</p>    
              </div>
              <div className="position">
                <h2>Assistant Store Manager</h2>
                    <p className="mx-4 my-4">Assistant store managers are to help with opening and closing duties. 
                    Another crucial part will be the helping of hiring new faces when needed. On the job training for 
                    potential store takeover relocation is possible!</p>
                    <p><b>Experience required:</b> 2 years service industry.</p>    
              </div>
            </div>
        </div>
    )
    }
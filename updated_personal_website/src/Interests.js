import React from 'react'
import './Interests.css';

const Interests = () => {
  return (
    //id necessary for linking when we use hashtags
    //Child error with image, so changed to inline
    <div className='interests' id='interests'>
        <div className='container'>
        
            <div className='text-section'>
                <h2>Interests:</h2>
                <span className='highlight-line'></span>
                <ul>
                  <li>
                    <h3>Working Out:</h3>
                    <p>Albeit I worked out intermittently during the first couple of years of high school, I began serious weight training in my junior year 
                      of high school. I lifted with two of my close friends (Daniel Zayac and Sricharan Vijayakumar) as a way to simply "get bigger." However, 
                      the stress of my senior-year classes and other personal items gave way to a new meaning for my workouts: I trained to become the best version of myself. 
                      As a result of this, I managed to lose twenty-seven pounds of fat and convert a great chunk of it into muscle (this is a core element of body recomposition) 
                      over the course of several summer months, permitting myself to feel the greatest I have felt in many years.
                      </p>

                      <p>
                        Despite this, my journey is not over, as I now hope to take this determination and perserverance from lifting into other aspects of my life such as running, school work, full-time job, raising a family, and much more.
                      </p>
                  </li>

                  <li>
                    <h3>Running:</h3>
                    <p>
                      Running grew to be a substitute for swimming, which I had done for over twelve years. I did not feel like swimming was toning my body much by my senior year of high school, so I switched to running full-time to experience a change in activities. I also did cross country and running club throughout elementary and high school but only truly committed to it my senior year of high school. Running is a huge reason why I have lost so many pounds on my path through body recomposition, and it serves as means of catharsis for me.
                    </p>

                    <p>
                      Some of my upcoming goals are to run the Boston Half and the regular Boston Marathon.
                    </p>
                  </li>

                  <li>
                    <h3>Reading:</h3>
                    <p>
                      I have been a reader for as long as I can remember. I am fond of fantasy, science-fiction, history, and psychological thrillers. Some of my favorite books ever are Life of Pi (Yann Martel), Jurassic Park and The Lost World (Michael Crichton), The End of the World Is Just the Beginning (Peter Zeihan), and 1984 (George Orwell).
                    </p>

                    <p>
                      I also love reading manga, which may or may not be considered to be books by some. My recommendations to anyone interested in reading such stories are Attack on Titan (Hajime Isayama), Monster, Pluto, 20th Century Boys and 21st Century Boys (Naoki Urasawa), Jujutsu Kaisen (Gege Akutami), Erased (Kei Sanbe), and last but not least, Vinland Saga (Makoto Yukimura).
                    </p>
                  </li>

                  <li>
                    <h3>Trying Out New Food:</h3>
                    <p>
                      Oh, my love for food is endless, despite growing up very picky 
                      (I am talking eating only burgers and fries at most events). As part of me 
                      maturing into the greatest version of myself, I am now on a quest to try out various foods around the world 
                      with an open mind. I have also taken the initiative to cook and bake.
                    </p>

                    <p>
                      Although cooking and baking has stressful moments, the outcomes are the best: I have made sweet and flaky baklava, smooth and watery pasta carbonara, and buttery and zesty shrimp scampi, just to name a few items.
                    </p>

                    <p>
                      I am now on a path to master the craft of Mediterranean foods from countries including Greece, Italy, and Turkey, from where I share many roots from among my family.
                    </p>
                  </li>

                  <li>
                    <h3>Hiking:</h3>
                    <p>
                      I love being outdoors. Whether it be a run, walk, or hike, I feel at peace.
                    </p>
                  </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Interests
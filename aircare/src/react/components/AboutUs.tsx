import React from 'react'

const AboutUs = () => {
  return (
    <div>
          <p className="text-2xl font-bold mt-[50px] text-center uppercase text-[#343a40]">About us</p>
          <div className="w-full h-[620px]">
              <img src={require('../../images/Rectangle 232.png')} className="w-full h-full" />
          </div>
          <div className="relative">
              <div className="w-full h-[237px] absolute top-[268px] -z-10">
                  <img src={require('../../images/Group 242.png')} className="w-full h-full" />
              </div>
              <div className="w-full h-[237px] absolute bottom-[236.45px] -z-10">
                  <img src={require('../../images/Cloud.png')} className="w-full h-full" />
              </div>
              <div className="px-[16px] flex flex-col mb-[183px] pt-[107px]">
                  <p className="text-lg font-bold text-right text-[#343a40] mb-[37px]">The Mission</p>
                  <p className="text-base font-medium text-right text-[#343a40]">
                      At Breathe.mk, our mission is to tirelessly work towards a cleaner and healthier Skopje by
                      addressing the critical issue of air quality.
                  </p>
                  <svg className="self-end mt-[30px]" width="189" height="1" viewBox="0 0 189 1" fill="none"
                      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                      <line x1="3.08678e-8" y1="0.646913" x2="189" y2="0.64693" stroke="#343A40"
                          stroke-width="0.706173"></line>
                  </svg>
              </div>
              <div className="px-[16px] flex flex-col mb-[183px]">
                  <p className="text-lg font-bold text-left text-[#343a40] mb-[26px]">The Dedication</p>
                  <p className="text-base font-medium text-left text-[#343a40]">
                      We are dedicated to implementing
                      innovative solutions, raising awareness, and collaborating
                      with stakeholders to reduce air pollution, ensuring that every citizen can breathe fresh, clean
                      air and enjoy a better quality of life.
                  </p>
                  <svg className="mt-[36px]" width="189" height="1" viewBox="0 0 189 1" fill="none"
                      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                      <line x1="3.08678e-8" y1="0.646913" x2="189" y2="0.64693" stroke="#343A40"
                          stroke-width="0.706173"></line>
                  </svg>
              </div>
              <div className="px-[16px] flex flex-col mb-[60px] pt-[107px]">
                  <p className="text-lg font-bold text-right text-[#343a40] mb-[37px]">The Commitment</p>
                  <p className="text-base font-medium text-right text-[#343a40]">
                      Our commitment is rooted in the belief that cleaner air is not just a goal but a fundamental right, and
                      we strive to make Skopje a shining example of environmental stewardship for generations to come.
                  </p>
                  <svg className="self-end mt-[32px]" width="189" height="1" viewBox="0 0 189 1" fill="none"
                      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                      <line x1="3.08678e-8" y1="0.646913" x2="189" y2="0.64693" stroke="#343A40"
                          stroke-width="0.706173"></line>
                  </svg>
              </div>
          </div>
          <div className="bg-[#CCCECF] px-[16px] pt-[24px] pb-[171px]">
              <p className="text-lg font-bold text-[#343a40]">
                  Our heros
              </p>
              <div className="w-[110px] h-[48.69px] mt-[56px] mb-[18px]">
                  <img src={require('../../images/Logo-Frontwisegroup_CMYK_vDEF 2.png')} alt=""
                      className="w-full h-full object-cover"/>
              </div>
              <p className="text-base font-medium text-[#343a40] mb-[74px]">
                  <span className="text-base font-semibold text-[#343a40]">Frontwise Group</span>
                  <br/>
                      <br/>
                          Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                      </p>
                      <div className="w-[44.32px] h-[46.83px] mb-[18px]">
                          <img src={require('../../images/image 2.png')} alt="" className="w-full h-full object-cover"/>
                      </div>
                      <p className="text-[13.427135467529297px] font-medium text-left text-[#343a40]">
                          <span className="text-[13.427135467529297px] font-semibold text-left text-[#343a40]">Skopje
                              City</span><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut
                          labore et dolore magna aliqua.
                          <br/>
                      </p>
                      <div className="w-[205px] h-12 mt-[74px] mb-[18px]">
                          <img src={require('../../images/ss_logo 1.png')} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[13.427135467529297px] font-medium text-left text-[#343a40]">
                          <span className="text-[13.427135467529297px] font-semibold text-left text-[#343a40]">Sample
                              Solutions</span><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor
                          incididunt ut
                          labore et dolore magna aliqua.
                          <br/>
                      </p>
                  </div>
            </div>
  )
}

export default AboutUs

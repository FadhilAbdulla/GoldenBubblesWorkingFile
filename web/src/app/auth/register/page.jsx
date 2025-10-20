'use client'

import PasswordFormInput from '@/components/form/PasswordFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter'
import { quotesData } from '@/layout/auth-layout/data'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { FaArrowLeft } from 'react-icons/fa'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import * as yup from 'yup'
import PageHeading from '../components/PageHeading'
import ThirdPartyAuth from '../components/ThirdPartyAuth'
import { DEFAULT_PAGE_PREFIX } from '@/states/constants'
import { HeaderGroup, PostRequest } from '@/api/apiFunctions'
import { ApiUrl } from '@/api/endPoints'
import toast from 'react-hot-toast'

const SignUp = () => {
  const [firstPassword, setFirstPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [userId, setUserId] = useState(null)
  const [documents, setDocuments] = useState({})
  const [docLoading, setDocLoading] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false)
  const [termsError, setTermsError] = useState('')
  const fileInputs = [useRef(), useRef(), useRef()]

  const resetPasswordSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().min(8, 'Password must of minimum 8 characters').required('Please enter Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  })
  const { control, handleSubmit, getValues, watch } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  })
  useEffect(() => {
    setFirstPassword(getValues().password)
  }, [watch('password')])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await PostRequest(ApiUrl.register, data)
      if (res?.success) {
        setUserId(res.userId)
        if (res.message) {
          toast.success(res.message)
        }
        setStep(2)
      } else {
        if (res?.message) {
          toast.error(res.error)
        }
      }

      // handle registration success
      // setStep(2)
    } finally {
      setLoading(false)
    }
  }

  const handleDocChange = (type, file) => {
    const newDocs = { ...documents, [type]: file }
    setDocuments(newDocs)
  }

  const handleDocSubmit = async (e) => {
    e.preventDefault()
    setDocLoading(true)
    try {
      // Create FormData manually for better mobile compatibility
      const formData = new FormData()
      Object.keys(documents).forEach((key) => {
        if (documents[key]) {
          formData.append(key, documents[key])
        }
      })

      const res = await PostRequest(`${ApiUrl.registerUploadDocument}/${userId}`, formData, HeaderGroup.multipart)
      if (res?.success) {
        if (res.message) {
          toast.success(res.message)
        }
        setStep(3)
      } else {
        if (res?.message) {
          toast.error(res.message)
        }
      }
    } finally {
      setDocLoading(false)
    }
  }

  return (
    <>
      <Row className="g-0">
        <Col lg={7} className="vh-100 d-none d-lg-block">
          <Swiper
            className="h-100"
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            navigation
            autoplay>
            {quotesData.map((quote, idx) => (
              <SwiperSlide key={idx}>
                <Card
                  className="rounded-0 h-100"
                  data-bs-theme="dark"
                  style={{
                    backgroundImage: `url(${quote.image.src})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}>
                  <div className="bg-overlay bg-dark opacity-5" />
                  {/* <div className="card-img-overlay z-index-2 p-7">
                    <div className="d-flex flex-column justify-content-end h-100">
                      <h4 className="fw-light">&quot;{quote.quote}&quot;</h4>

                      <div className="d-flex justify-content-between mt-5">
                        <div>
                          <h5 className="mb-0">{quote.author}</h5>
                          <span>{quote.position}</span>
                        </div>

                        <ul className="list-inline mb-1">
                          <li className="list-inline-item small me-1">
                            <FaStar size={16} className="fa-solid fa-star text-white" />
                          </li>
                          <li className="list-inline-item small me-1">
                            <FaStar size={16} className="fa-solid fa-star text-white" />
                          </li>
                          <li className="list-inline-item small me-1">
                            <FaStar size={16} className="fa-solid fa-star text-white" />
                          </li>
                          <li className="list-inline-item small me-1">
                            <FaStar size={16} className="fa-solid fa-star text-white" />
                          </li>
                          <li className="list-inline-item small">
                            <FaStarHalfAlt size={16} className="fa-solid fa-star-half-alt text-white" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </Card>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination swiper-pagination-line mb-3" />
          </Swiper>
        </Col>

        <Col sm={10} lg={5} className="d-flex m-auto vh-100">
          <Row className="w-100 m-auto">
            <Col sm={10} className="my-5 m-auto">
              {step < 3 && <PageHeading heading="Start Trading Today !" subHeading="Open your account and access global markets with confidence" />}
              {step === 2 && <hr className="my-4" />}

              {/* <ThirdPartyAuth /> */}

              {step === 1 && (
                <Form
                  onSubmit={handleSubmit((data) => {
                    if (!termsChecked) {
                      setTermsError('You must accept the terms and conditions to create an account.')
                      return
                    }
                    setTermsError('')
                    onSubmit(data)
                  })}
                  className="mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <TextFormInput
                        control={control}
                        name="firstName"
                        label="First Name"
                        placeholder="First Name"
                        type="text"
                        containerClass="mb-4"
                        floating
                      />
                    </div>
                    <div className="col-md-6">
                      <TextFormInput
                        control={control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                        type="text"
                        containerClass="mb-4"
                        floating
                      />
                    </div>
                  </div>
                  <TextFormInput
                    control={control}
                    name="email"
                    label="Email"
                    placeholder="name@example.com"
                    type="email"
                    containerClass="mb-4"
                    floating
                  />
                  <TextFormInput control={control} name="phone" label="Phone" placeholder="+971********" type="text" containerClass="mb-4" floating />

                  <PasswordFormInput
                    control={control}
                    name="password"
                    label="Password"
                    containerClass="mb-3 position-relative"
                    className="pe-6"
                    placeholder="Enter your password"
                    floating
                  />

                  {firstPassword && <PasswordStrengthMeter password={firstPassword} />}

                  {/* <PasswordFormInput
                  control={control}
                  name="confirmPassword"
                  label="Password"
                  containerClass="mb-4 position-relative"
                  className="mb-3 mt-4"
                  placeholder="Enter your password"
                  floating
                /> */}

                  <div>
                    <div className="mb-4 mt-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-1"
                          checked={termsChecked}
                          onChange={(e) => {
                            setTermsChecked(e.target.checked)
                            if (e.target.checked) setTermsError('')
                          }}
                        />
                        <label className="form-check-label" htmlFor="checkbox-1">
                          I agree to all Terms &amp; conditions and the privacy policy.
                        </label>
                      </div>
                      {termsError && <div className="text-danger small mt-2">{termsError}</div>}
                    </div>

                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-dark mb-0" type="submit" disabled={loading}>
                          {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                          Create my account
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}

              {step === 2 && (
                <Form onSubmit={handleDocSubmit} className="mt-4">
                  <h5 className="mb-4">Upload Your Documents</h5>
                  <div className="mb-3">
                    <label className="form-label">Passport</label>
                    <input
                      type="file"
                      className="form-control"
                      ref={fileInputs[0]}
                      onChange={(e) => handleDocChange('passport', e.target.files[0])}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Emirates ID</label>
                    <input
                      type="file"
                      className="form-control"
                      ref={fileInputs[1]}
                      onChange={(e) => handleDocChange('emirates_id', e.target.files[0])}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Proof of Address ( e.g., Utility Bill )</label>
                    <input
                      type="file"
                      className="form-control"
                      ref={fileInputs[2]}
                      onChange={(e) => handleDocChange('proof_of_address', e.target.files[0])}
                      required
                    />
                  </div>
                  <div className="d-grid mt-4">
                    <button className="btn btn-dark mb-0" type="submit" disabled={docLoading || Object.keys(documents).length < 3}>
                      {docLoading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                      Submit Documents
                    </button>
                  </div>
                </Form>
              )}

              {step === 3 && (
                <div className="mt-5 text-center">
                  <h4 className="mb-3">Thank you for submitting your documents!</h4>
                  <p>We will check the documents and verify the same. You will be notified once your account is verified.</p>
                  <p>
                    If you have any query please <Link href={`${DEFAULT_PAGE_PREFIX}contact`}>reach to us</Link>.<br />
                    <Link href={DEFAULT_PAGE_PREFIX || '/'} className="btn btn-link mt-3">
                      <FaArrowLeft className="me-2" />
                      Return to Home
                    </Link>
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="mt-4 text-center">
                  <span>
                    Already have an account?
                    <Link href={`${DEFAULT_PAGE_PREFIX}auth/login`}> Sign in here</Link>
                  </span>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default SignUp

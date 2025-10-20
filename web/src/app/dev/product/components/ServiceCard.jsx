import Image from 'next/image'

const getGoldenGradient = (shift = 0) => {
  // shift: 0-1, rotates the gradient
  const angle = 120 + shift * 40 // 120deg base, up to 160deg
  return `linear-gradient(${angle}deg, #E6BE64 0%, #A17729 100%)`
}

const ServiceCard = ({
  icon, // rounded image src
  name, // e.g. "USDCAD"
  fullName, // e.g. "US Dollar vs Canadian Dollar"
  price, // e.g. "$1.37734"
  percent, // e.g. "2.52"
  percentColor, // e.g. "#2ecc71" or "green"
  gradientShift = 0, // 0-1, controls the gradient angle
}) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{
        background: getGoldenGradient(gradientShift),
        borderRadius: 20,
        padding: 20,
        width: '100%',
        minHeight: 130,
        color: '#fff',
        position: 'relative',
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        transition: 'background 0.5s cubic-bezier(.4,2,.6,1)',
      }}>
      <div className="d-flex align-items-center mb-2">
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #222',
            marginRight: 12,
            background: '#222',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {icon && <Image src={icon} alt={name} width={40} height={40} />}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>{name}</div>
          <div style={{ fontSize: 13, color: '#ccc', maxWidth: 140, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {fullName}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-between mt-2">
        <div style={{ fontSize: 22, fontWeight: 600 }}>{price}</div>
        <div style={{ color: percentColor || '#2ecc71', fontWeight: 600, fontSize: 16 }}>
          {percent > 0 ? '+' : ''}
          {percent}%
        </div>
      </div>
    </div>
  )
}

export default ServiceCard

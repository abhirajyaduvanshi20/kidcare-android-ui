import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Check, Camera, Image, Trash2, Calendar, User, ShieldCheck } from 'lucide-react';

export const UpdateVaccineModal = () => {
  const { closeModal, modalData, markVaccineGiven, currentKid } = useApp();

  const vaccine = modalData;
  const isDone = vaccine?.status === 'GIVEN' || vaccine?.status === 'Done';
  const isOverdue = vaccine?.status === 'OVERDUE';
  
  // Android Header Status Color
  const headerColor = isDone ? '#53BF9D' : isOverdue ? '#FF9933' : '#F5DC91';

  const [batchNo, setBatchNo] = useState(vaccine?.batchNo || '');
  const [expiryDate, setExpiryDate] = useState(vaccine?.expiryDate || '2027-12-31');
  const [givenDate, setGivenDate] = useState(vaccine?.givenDate || new Date().toISOString().split('T')[0]);
  const [doctor, setDoctor] = useState(vaccine?.doctor || 'Dr. Ila B');
  const [brand, setBrand] = useState(vaccine?.brand || '');
  const [imgUrl, setImgUrl] = useState(vaccine?.certificateImage || '/assets/pdf_logo_tp.png');
  const [isImageSheetOpen, setIsImageSheetOpen] = useState(false);

  if (!vaccine) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    markVaccineGiven(vaccine.id, {
      givenDate,
      expiryDate,
      brand: brand || vaccine.brand || 'Standard IAP',
      batchNo: batchNo || 'BATCH-' + Math.floor(1000 + Math.random() * 9000),
      doctor: doctor || 'Dr. Ila B',
      certificateImage: imgUrl
    });
    closeModal();
  };

  const handleSimulateUpload = (source) => {
    // Simulate image selection from camera or gallery
    if (source === 'camera') {
      setImgUrl('/assets/pdf_logo_tp.png');
    } else {
      setImgUrl('/assets/demo_qr_kidcare_image.png');
    }
    setIsImageSheetOpen(false);
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div 
        className="modal-sheet animate-slide-up" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
      >
        <div className="sheet-handle" />

        {/* Top App Bar inside sheet */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#012741' }}>Update Vaccination</h3>
            <p style={{ fontSize: '11.5px', color: '#64748B' }}>{currentKid.name} • {vaccine.name}</p>
          </div>
          <button 
            onClick={closeModal}
            style={{ 
              background: '#F1F5F9', 
              border: 'none', 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer' 
            }}
          >
            <X size={16} color="#64748B" />
          </button>
        </div>

        {/* Header Card Banner matching Android UpdateVaccinationScreen */}
        <div style={{
          background: headerColor,
          borderRadius: '12px',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
        }}>
          <div>
            <h4 style={{ 
              fontSize: '15px', 
              fontWeight: '800', 
              color: isDone || isOverdue ? '#FFFFFF' : '#012741',
              margin: 0
            }}>
              {vaccine.name}
            </h4>
            <p style={{ 
              fontSize: '11.5px', 
              fontWeight: '600', 
              color: isDone || isOverdue ? '#FFFFFF' : '#012741',
              margin: '2px 0 0',
              opacity: 0.95
            }}>
              Stage: {vaccine.ageDue}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ 
              fontSize: '13px', 
              fontWeight: '800', 
              color: isDone || isOverdue ? '#FFFFFF' : '#012741' 
            }}>
              {isDone ? 'Done' : isOverdue ? 'Overdue' : 'Upcoming'}
            </span>
            <p style={{ 
              fontSize: '11px', 
              fontWeight: '600', 
              color: isDone || isOverdue ? '#FFFFFF' : '#012741', 
              margin: '1px 0 0',
              opacity: 0.9
            }}>
              Due: {vaccine.dueDate || vaccine.ageDue}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Batch No */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: '800', color: '#012741', display: 'block', marginBottom: '4px' }}>
              Batch No
            </label>
            <input
              type="text"
              placeholder="Enter Batch Number (e.g. HEX-8991B):"
              value={batchNo}
              onChange={(e) => setBatchNo(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                outline: 'none',
                background: '#FFFFFF'
              }}
            />
          </div>

          {/* Vaccine Expiry Date */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: '800', color: '#012741', display: 'block', marginBottom: '4px' }}>
              Vaccine Expiry Date
            </label>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                outline: 'none',
                background: '#FFFFFF'
              }}
            />
          </div>

          {/* Administered On */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: '800', color: '#012741', display: 'block', marginBottom: '4px' }}>
              Administered On
            </label>
            <input
              type="date"
              value={givenDate}
              onChange={(e) => setGivenDate(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                outline: 'none',
                background: '#FFFFFF'
              }}
            />
          </div>

          {/* Given By Doctor */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: '800', color: '#012741', display: 'block', marginBottom: '4px' }}>
              Given By
            </label>
            <input
              type="text"
              placeholder="Enter Dr./Nurse Name:"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                outline: 'none',
                background: '#FFFFFF'
              }}
            />
          </div>

          {/* Upload Image Section - matches Android CardColors(#E2F5FF) */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: '800', color: '#012741', display: 'block', marginBottom: '4px' }}>
              Upload Image
            </label>
            <div
              onClick={() => setIsImageSheetOpen(!isImageSheetOpen)}
              style={{
                width: '100%',
                minHeight: '110px',
                borderRadius: '12px',
                background: '#E2F5FF',
                border: '1.5px dashed #056DB4',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                cursor: 'pointer'
              }}
            >
              {imgUrl ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img 
                    src={imgUrl} 
                    alt="Vaccine proof" 
                    style={{ width: '60px', height: '60px', objectFit: 'contain', background: '#FFFFFF', borderRadius: '8px', padding: '4px', border: '1px solid #CBD5E1' }} 
                  />
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '700', color: '#012741', margin: 0 }}>Certificate Proof Attached</p>
                    <p style={{ fontSize: '11px', color: '#056DB4', margin: '2px 0 0' }}>Tap to change / replace image</p>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <Camera size={24} color="#056DB4" />
                  <p style={{ fontSize: '12px', color: '#64748B', marginTop: '4px', margin: 0 }}>Click and upload vaccination image.</p>
                </div>
              )}
            </div>

            {/* Bottom sheet picker options (Camera / Gallery) */}
            {isImageSheetOpen && (
              <div style={{ 
                marginTop: '8px', 
                background: '#FFFFFF', 
                borderRadius: '12px', 
                padding: '10px', 
                border: '1px solid #E2E8F0',
                display: 'flex',
                gap: '10px',
                justifyContent: 'space-around'
              }}>
                <button
                  type="button"
                  onClick={() => handleSimulateUpload('camera')}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px',
                    borderRadius: '10px',
                    border: 'none',
                    background: '#FF9933',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <Camera size={18} /> Camera
                </button>

                <button
                  type="button"
                  onClick={() => handleSimulateUpload('gallery')}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px',
                    borderRadius: '10px',
                    border: 'none',
                    background: '#53BF9D',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <Image size={18} /> Gallery
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ 
              width: '100%', 
              padding: '14px', 
              borderRadius: '14px', 
              marginTop: '8px',
              fontSize: '14px',
              fontWeight: '800'
            }}
          >
            <Check size={18} /> Update Vaccination Details
          </button>
        </form>
      </div>
    </div>
  );
};

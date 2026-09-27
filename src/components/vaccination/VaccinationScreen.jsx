import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ChevronLeft, 
  Syringe, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Camera, 
  ShieldCheck, 
  Search, 
  ChevronRight,
  Sparkles,
  Calendar,
  UserCheck,
  Maximize2
} from 'lucide-react';

export const VaccinationScreen = () => {
  const { closeModal, currentKid, vaccines, openModal, setModalData } = useApp();
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const kidVaccines = vaccines.filter(v => v.kidId === currentKid.id);

  const ageGroups = ['All', 'At Birth', '6 Weeks', '10 Weeks', '14 Weeks', '6 Months', '9 Months', '12 Months', '15 Months', '18 Months', 'Annual'];

  const getAgeGroupColor = (age) => {
    if (age === selectedAgeGroup) return '#056DB4'; // PrimaryBlue
    const groupVacs = kidVaccines.filter(v => v.ageDue === age);
    if (groupVacs.length === 0) return '#F5DC91'; // CardYellow
    if (groupVacs.some(v => v.status === 'OVERDUE')) return '#FF9933'; // Overdue Orange
    if (groupVacs.every(v => v.status === 'GIVEN' || v.status === 'Done')) return '#53BF9D'; // PrimaryGreen
    return '#F5DC91'; // CardYellow
  };

  const getAgeGroupTextColor = (age) => {
    if (age === selectedAgeGroup) return '#FFFFFF';
    const groupVacs = kidVaccines.filter(v => v.ageDue === age);
    if (groupVacs.length > 0 && groupVacs.every(v => v.status === 'GIVEN' || v.status === 'Done')) return '#012741';
    return '#000000';
  };

  const filteredVaccines = kidVaccines.filter(vac => {
    const matchesAge = selectedAgeGroup === 'All' || vac.ageDue === selectedAgeGroup;
    const matchesSearch = vac.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (vac.disease && vac.disease.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesAge && matchesSearch;
  });

  const givenCount = kidVaccines.filter(v => v.status === 'GIVEN' || v.status === 'Done').length;
  const overdueCount = kidVaccines.filter(v => v.status === 'OVERDUE').length;
  const dueCount = kidVaccines.filter(v => v.status === 'DUE' || v.status === 'UPCOMING').length;

  return (
    <div className="modal-fullscreen">
      {/* Top App Bar - matches Android CenterAlignedTopAppBar */}
      <div style={{
        padding: '14px 18px',
        borderBottom: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFFFFF',
        position: 'sticky',
        top: 0,
        zIndex: 30
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={closeModal}
            style={{ 
              background: '#F1F5F9', 
              border: 'none', 
              width: '38px', 
              height: '38px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer' 
            }}
          >
            <ChevronLeft size={22} color="#012741" />
          </button>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#012741' }}>Vaccinations</h3>
            <p style={{ fontSize: '11px', color: '#64748B' }}>{currentKid.name} • IAP Immunization Schedule</p>
          </div>
        </div>

        {/* Header Kid Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img 
            src={currentKid.avatar || '/assets/kid1_1.png'} 
            alt={currentKid.name}
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #53BF9D' }}
          />
        </div>
      </div>

      <div style={{ flex: 1, padding: '16px 16px 40px', background: '#FAF9F7', overflowY: 'auto' }}>
        {/* Immunization Progress Card with Android Primary Colors */}
        <div style={{
          background: 'linear-gradient(135deg, #53BF9D 0%, #056DB4 100%)',
          borderRadius: '20px',
          padding: '16px 18px',
          color: '#FFFFFF',
          marginBottom: '14px',
          boxShadow: '0 8px 24px rgba(5, 109, 180, 0.22)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={20} color="#FFFFFF" />
              <h4 style={{ fontSize: '15px', fontWeight: '800' }}>Immunization Protection</h4>
            </div>
            <span style={{ fontSize: '12px', fontWeight: '800', background: 'rgba(255,255,255,0.25)', padding: '3px 9px', borderRadius: '10px' }}>
              {Math.round((givenCount / (kidVaccines.length || 1)) * 100)}% Complete
            </span>
          </div>

          {/* Progress Bar */}
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.25)', borderRadius: '10px', overflow: 'hidden', marginBottom: '12px' }}>
            <div style={{
              width: `${(givenCount / (kidVaccines.length || 1)) * 100}%`,
              height: '100%',
              background: '#FFFFFF',
              borderRadius: '10px',
              transition: 'width 0.4s ease'
            }} />
          </div>

          {/* Summary counters in Android theme colors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
            <div style={{ background: 'rgba(0,0,0,0.18)', padding: '6px 8px', borderRadius: '12px' }}>
              <span style={{ fontSize: '9.5px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Done</span>
              <p style={{ fontSize: '15px', fontWeight: '800', marginTop: '1px', color: '#A7F3D0' }}>{givenCount}</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.18)', padding: '6px 8px', borderRadius: '12px' }}>
              <span style={{ fontSize: '9.5px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Due / Upcoming</span>
              <p style={{ fontSize: '15px', fontWeight: '800', marginTop: '1px', color: '#F5DC91' }}>{dueCount}</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.18)', padding: '6px 8px', borderRadius: '12px' }}>
              <span style={{ fontSize: '9.5px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Overdue</span>
              <p style={{ fontSize: '15px', fontWeight: '800', marginTop: '1px', color: '#FF9933' }}>{overdueCount}</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#FFFFFF',
          padding: '10px 14px',
          borderRadius: '14px',
          border: '1px solid #E2E8F0',
          marginBottom: '12px'
        }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search vaccine (e.g. BCG, Polio, MMR, Hexaxim)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '13px' }}
          />
        </div>

        {/* Age Range LazyRow Tabs - matches Android LazyRow colors */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          overflowX: 'auto', 
          paddingBottom: '8px', 
          marginBottom: '12px',
          scrollbarWidth: 'none'
        }}>
          {ageGroups.map((age) => {
            const bg = getAgeGroupColor(age);
            const textCol = getAgeGroupTextColor(age);
            const isSelected = selectedAgeGroup === age;

            return (
              <button
                key={age}
                onClick={() => setSelectedAgeGroup(age)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '800',
                  border: isSelected ? '1.5px solid #056DB4' : 'none',
                  background: bg,
                  color: textCol,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
              >
                {age}
              </button>
            );
          })}
        </div>

        {/* Vaccines List - Cards match Android VaccinationCard */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredVaccines.length === 0 ? (
            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', textAlign: 'center', border: '1px dashed #CBD5E1' }}>
              <p style={{ fontSize: '13px', color: '#64748B' }}>No vaccines found matching filter.</p>
            </div>
          ) : (
            filteredVaccines.map((vac) => {
              const isDone = vac.status === 'GIVEN' || vac.status === 'Done';
              const isOverdue = vac.status === 'OVERDUE';
              
              // Android statusColor mapping:
              // Done -> PrimaryGreen (#53BF9D)
              // Overdue -> #FF9933
              // Due / Upcoming -> CardYellow (#F5DC91)
              const statusColor = isDone ? '#53BF9D' : isOverdue ? '#FF9933' : '#F5DC91';
              const statusLabel = isDone ? 'Done' : isOverdue ? 'Overdue' : 'Due';

              return (
                <div
                  key={vac.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Top Card Banner with Android statusColor */}
                  <div style={{
                    padding: '10px 14px',
                    background: statusColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <h4 style={{ 
                      fontSize: '15px', 
                      fontWeight: '800', 
                      color: isDone || isOverdue ? '#FFFFFF' : '#012741',
                      margin: 0
                    }}>
                      {vac.name}
                    </h4>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {isDone ? (
                        <CheckCircle2 size={18} color="#FFFFFF" />
                      ) : isOverdue ? (
                        <AlertTriangle size={18} color="#FFFFFF" />
                      ) : (
                        <Clock size={18} color="#012741" />
                      )}
                      
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ 
                          fontSize: '13px', 
                          fontWeight: '800', 
                          margin: 0,
                          color: isDone || isOverdue ? '#FFFFFF' : '#012741'
                        }}>
                          {statusLabel}
                        </p>
                        <p style={{ 
                          fontSize: '11px', 
                          fontWeight: '600', 
                          margin: 0, 
                          opacity: 0.9,
                          color: isDone || isOverdue ? '#FFFFFF' : '#012741'
                        }}>
                          {isDone ? `Given: ${vac.givenDate}` : `Due: ${vac.dueDate || vac.ageDue}`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content (Row layout matching Android) */}
                  <div style={{ padding: '14px', display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
                    {/* Left Column: Description & Details */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <p style={{ fontSize: '13px', fontWeight: '700', color: '#012741', margin: 0 }}>
                        {vac.disease || 'Essential Pediatric Immunization'}
                      </p>

                      <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>
                        <strong style={{ color: '#012741' }}>Vaccine Details</strong>
                        <div style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <p style={{ margin: 0, fontSize: '11.5px', color: '#64748B' }}>
                            Due Stage: <strong style={{ color: '#012741' }}>{vac.ageDue}</strong>
                          </p>
                          {vac.brand && (
                            <p style={{ margin: 0, fontSize: '11.5px', color: '#64748B' }}>
                              Brand: <strong style={{ color: '#012741' }}>{vac.brand}</strong>
                            </p>
                          )}
                          {isDone && vac.batchNo && (
                            <p style={{ margin: 0, fontSize: '11.5px', color: '#64748B' }}>
                              Batch: <strong style={{ color: '#012741' }}>{vac.batchNo}</strong>
                            </p>
                          )}
                          {isDone && vac.doctor && (
                            <p style={{ margin: 0, fontSize: '11.5px', color: '#64748B' }}>
                              Administered by: <strong style={{ color: '#012741' }}>{vac.doctor}</strong>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Vaccine Proof Thumbnail */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <div 
                        onClick={() => setPreviewImage(vac.certificateImage || '/assets/pdf_logo_tp.png')}
                        style={{
                          width: '78px',
                          height: '78px',
                          borderRadius: '12px',
                          border: '1.5px solid #CBD5E1',
                          background: '#E2F5FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        title="Click to zoom proof"
                      >
                        <img 
                          src={vac.certificateImage || '/assets/pdf_logo_tp.png'} 
                          alt="Proof"
                          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: 2,
                          right: 2,
                          background: 'rgba(1, 39, 65, 0.7)',
                          borderRadius: '6px',
                          padding: '2px 4px',
                          color: '#FFFFFF'
                        }}>
                          <Maximize2 size={10} />
                        </div>
                      </div>
                      <span style={{ fontSize: '10px', color: '#056DB4', fontWeight: '700' }}>
                        {isDone ? 'Proof Cert' : 'Prescription'}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div style={{ 
                    padding: '10px 14px', 
                    borderTop: '1px solid #F1F5F9', 
                    background: '#FAF9F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '11.5px', color: '#64748B' }}>
                      {isDone ? `Administered on ${vac.givenDate}` : `Recommended before ${vac.dueDate || 'due stage'}`}
                    </span>

                    <button
                      onClick={() => openModal('update-vaccine', vac)}
                      style={{
                        padding: '7px 14px',
                        borderRadius: '10px',
                        border: 'none',
                        background: isDone ? '#056DB4' : '#53BF9D',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '800',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      {isDone ? 'Update Details' : 'Record Vaccine'} <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Image Zoom Lightbox Modal */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div style={{ maxWidth: '90%', maxHeight: '80%', background: '#FFFFFF', padding: '16px', borderRadius: '16px' }} onClick={e => e.stopPropagation()}>
            <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#012741', marginBottom: '8px' }}>Vaccine Certificate Document</h4>
            <img src={previewImage} alt="Certificate preview" style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
            <button
              onClick={() => setPreviewImage(null)}
              className="btn-primary"
              style={{ width: '100%', marginTop: '12px', padding: '10px', borderRadius: '10px' }}
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

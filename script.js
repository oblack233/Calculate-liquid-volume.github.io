// 更新套管内径选项
function updateCasingInnerOptions(parent, size) {
    // 找到parent中的内径选择下拉框，如果不存在则创建
    let innerSpecSelect = parent.querySelector('.casing-inner-spec');
    
    if (!innerSpecSelect) {
        // 创建新的内径选择下拉框
        const innerSpecGroup = document.createElement('div');
        innerSpecGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = '内径规格:';
        innerSpecGroup.appendChild(label);
        
        innerSpecSelect = document.createElement('select');
        innerSpecSelect.className = 'casing-inner-spec';
        innerSpecGroup.appendChild(innerSpecSelect);
        
        // 找到适当的位置插入
        const odFormGroup = parent.querySelector('.casing-od').closest('.form-group');
        parent.insertBefore(innerSpecGroup, odFormGroup);
        
        // 添加事件监听
        innerSpecSelect.addEventListener('change', function() {
            updateCasingDetails(parent, size, this.value);
        });
    }
    
    // 清空现有选项
    innerSpecSelect.innerHTML = '<option value="">请选择内径规格</option>';
    
    // 设置外径 - 选择新尺寸时总是更新外径
    const odInput = parent.querySelector('.casing-od');
    if (size && casingData[size]) {
        odInput.value = casingData[size].od;
        // 重置用户修改标记，因为选择了新的尺寸
        odInput.dataset.userModified = 'false';
    } else {
        odInput.value = '';
    }
    
    // 填充内径选项
    if (size && casingData[size]) {
        const variants = casingData[size].variants;
        variants.forEach((variant, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${variant.id}mm (${variant.weight}kg/m)`;
            innerSpecSelect.appendChild(option);
        });
    }
    
    // 清空内径
    const idInput = parent.querySelector('.casing-id');
    idInput.value = '';
    // 重置用户修改标记
    idInput.dataset.userModified = 'false';
    
    drawWellDiagram();
}

// 更新套管详情
function updateCasingDetails(parent, size, variantIndex) {
    const odInput = parent.querySelector('.casing-od');
    const idInput = parent.querySelector('.casing-id');
    
    if (size === '' || variantIndex === '') {
        odInput.value = '';
        idInput.value = '';
        return;
    }
    
    if (casingData[size] && casingData[size].variants[variantIndex]) {
        const variant = casingData[size].variants[variantIndex];
        
        // 总是更新值，不检查用户修改标记
        odInput.value = casingData[size].od;
        idInput.value = variant.id;
        
        // 更新用户修改标记
        odInput.dataset.userModified = 'false';
        idInput.dataset.userModified = 'false';
    }
    
    drawWellDiagram();
}

// 更新油管选项
function updateTubingOptions() {
    const tubingType = document.getElementById('tubingType').value;
    const tubingSizeSelect = document.getElementById('tubingSize');
    const tubingData = tubingType === 'regular' ? regularTubingData : thickenedTubingData;
    
    tubingSizeSelect.innerHTML = '<option value="">请选择尺寸</option>';
    
    for (const size in tubingData) {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = `${size}" (${tubingData[size].od}mm)`;
        tubingSizeSelect.appendChild(option);
    }
    
    // 清空内径选项
    document.getElementById('tubingInnerSpec').innerHTML = '<option value="">请选择内径规格</option>';
    
    // 清空所有值并重置修改标记
    const tubingODInput = document.getElementById('tubingOD');
    const tubingIDInput = document.getElementById('tubingID');
    const tubingWeightInput = document.getElementById('tubingWeight');
    
    tubingODInput.value = '';
    tubingIDInput.value = '';
    tubingWeightInput.value = '';
    
    tubingODInput.dataset.userModified = 'false';
    tubingIDInput.dataset.userModified = 'false';
    tubingWeightInput.dataset.userModified = 'false';
    
    drawWellDiagram();
}

// 更新油管内径选项
function updateTubingInnerOptions() {
    const tubingType = document.getElementById('tubingType').value;
    const tubingSize = document.getElementById('tubingSize').value;
    const tubingInnerSelect = document.getElementById('tubingInnerSpec');
    const tubingData = tubingType === 'regular' ? regularTubingData : thickenedTubingData;
    const tubingODInput = document.getElementById('tubingOD');
    
    tubingInnerSelect.innerHTML = '<option value="">请选择内径规格</option>';
    
    if (tubingSize && tubingData[tubingSize]) {
        const variants = tubingData[tubingSize].variants;
        variants.forEach((variant, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${variant.id}mm (${variant.weight}t/1000m)`;
            tubingInnerSelect.appendChild(option);
        });
        
        // 总是更新外径值
        tubingODInput.value = tubingData[tubingSize].od;
        tubingODInput.dataset.userModified = 'false';
    } else {
        tubingODInput.value = '';
    }
    
    // 清空内径和重量
    document.getElementById('tubingID').value = '';
    document.getElementById('tubingWeight').value = '';
    document.getElementById('tubingID').dataset.userModified = 'false';
    document.getElementById('tubingWeight').dataset.userModified = 'false';
    
    drawWellDiagram();
}

// 更新油管详情
function updateTubingDetails() {
    const tubingType = document.getElementById('tubingType').value;
    const tubingSize = document.getElementById('tubingSize').value;
    const variantIndex = document.getElementById('tubingInnerSpec').value;
    const tubingData = tubingType === 'regular' ? regularTubingData : thickenedTubingData;
    const tubingIDInput = document.getElementById('tubingID');
    const tubingWeightInput = document.getElementById('tubingWeight');
    
    if (tubingSize && variantIndex !== '' && tubingData[tubingSize]) {
        const variant = tubingData[tubingSize].variants[variantIndex];
        // 总是更新值
        tubingIDInput.value = variant.id;
        tubingWeightInput.value = variant.weight;
        
        // 重置修改标记
        tubingIDInput.dataset.userModified = 'false';
        tubingWeightInput.dataset.userModified = 'false';
    } else {
        tubingIDInput.value = '';
        tubingWeightInput.value = '';
    }
    
    drawWellDiagram();
}
